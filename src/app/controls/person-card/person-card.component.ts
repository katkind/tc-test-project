import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core'
import { Person } from '../../models/person'
import { environment } from '../../../environments/environment'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material/icon'


@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('like', [
    state('false', style({ opacity: '0'})),
    state('true', style({ opacity: '1', transform: 'scale(1) translate(50px, -100px)'})),
    transition('false => true', animate('0.5s')),
    transition('true => false', animate('1ms'))
  ])]
})
export class PersonCardComponent implements OnInit {

  private readonly imgUrl = environment.imgUrl || 'http://127.0.0.1:3000/images'
  @Input() person: Person
  @Output() likePerson: EventEmitter<boolean> = new EventEmitter()
  background: any
  isLiked: boolean = false

  constructor(private domSanitizer: DomSanitizer,
             private matIconRegistry: MatIconRegistry) { }

  ngOnInit(): void {
    this.matIconRegistry
      .addSvgIcon('favorite',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/favorite.svg'))
    this.background = `url(${this.imgUrl}/${this.person.image})`
  }

  like() {
    this.isLiked = true
    // delay for animated like
    setTimeout(() => {
      this.isLiked = false
      this.likePerson.emit(true)
    }, 700)
  }

  dislike() {
    this.likePerson.emit(false)
  }


}
