import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'
import { OverlayModule } from '@angular/cdk/overlay'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'

const matModules = [
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  OverlayModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports: [
    ...matModules
  ],
  providers: [
    MatIconRegistry
  ]
})
export class MaterialModule { }
