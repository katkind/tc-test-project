import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { animate, state, style, transition, trigger } from "@angular/animations"

import { ApiService } from '../../services/api.service'
import { MatchOverlayComponent } from '../match-overlay/match-overlay.component'
import { Person } from '../../models/person'
import { LikeAnswer } from '../../models/like-answer'



export const slideList = trigger('slide',
  [
    state('*', style({ transform: 'translateX({{step}}px)'}),{ params: { step: '0'}}),
    transition('* <=> *', animate('0.3s'))
  ]
)

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ slideList ]
})
export class FeedComponent implements OnInit , OnDestroy{

  overlayRef: OverlayRef
  data$: Observable<Person[]>
  auth: Person
  offsetX = -400
  step = 0
  emptyPerson: Person = { name: 'No more recommendations for you' }
  subs: Subscription = new Subscription()

  constructor(
    private apiService: ApiService,
    private overlay: Overlay
  ) { }

  ngOnInit(): void {
    this.data$ = this.apiService.getFeedData()
    this.auth = this.apiService.auth
  }

  onLikeHandler($event: boolean, id: number) {

    if($event) {
      // like button clicked => show match overlay with ok button
      this.subs.add(
        this.apiService.like(id).subscribe((response: LikeAnswer) => {
          if(response.status === 'Ok') {
            this.overlayRef = this.overlay.create()
            const componentPortal = new ComponentPortal(MatchOverlayComponent)
            const matchOverlay = this.overlayRef.attach(componentPortal)
            matchOverlay.instance.okayPerson.subscribe(_ => {
              this.overlayRef.dispose()
              this.subs.add(this.apiService.getProfile(id).subscribe(profile => {
                // do anything with profile data
              }))
            })
          }
        })
      )
    } else {
      // dislike button clicked => list more
      this.step += 1
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

}
