import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core'
import { Person } from '../../models/person'
import { animate, state, style, transition, trigger } from '@angular/animations'


export const matchEffect = trigger('match',
  [
    state('initial', style({ transform: 'scale(0.5)'})),
    state('*', style({ transform: 'scale(1)'})),
    transition('initial <=> *', animate('0.5s'))
  ]
)

@Component({
  selector: 'app-match-overlay',
  templateUrl: './match-overlay.component.html',
  styleUrls: ['./match-overlay.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ matchEffect ]
})
export class MatchOverlayComponent implements OnInit {

  @Input() person: Person
  @Output() okayPerson: EventEmitter<true> = new EventEmitter(true)
  isMatched = 'initial'

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isMatched = 'matched'
    }, 500)
  }

  okay() {
    this.okayPerson.emit()
  }

}
