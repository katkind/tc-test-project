import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './feed/feed.component'
import { PersonCardComponent } from './person-card/person-card.component'
import { MaterialModule } from './material.module'
import { MatchOverlayComponent } from './match-overlay/match-overlay.component'



@NgModule({
  declarations: [
    FeedComponent,
    PersonCardComponent,
    MatchOverlayComponent
  ],
  exports: [
    FeedComponent
  ],
	imports: [
		CommonModule,
		MaterialModule
	],
  entryComponents: [
    MatchOverlayComponent
  ]
})
export class ControlsModule { }
