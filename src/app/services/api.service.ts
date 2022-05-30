import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Person } from '../models/person'
import { environment } from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiBaseUrl = environment.apiUrl || 'http://127.0.0.1:3000/api'
  auth: Person


  constructor(
    private http: HttpClient
  ) {
    this.getAuth()
  }

  private getAuth() {
    this.http.get(`${this.apiBaseUrl}/auth`).subscribe((response: Person) => {
      this.auth = response
    })
  }

  getFeedData(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/profiles`)
  }

  like(personId: number): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/profiles/like`, {
      from: this.auth.id,
      to: personId
    })
  }

  getProfile(personId: number): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/profiles/${personId}`)
  }

}
