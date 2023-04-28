import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NgModule } from '@angular/core';
import { DarkModeService } from './ui/services/dark-mode.service';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ],
  providers: [
    DarkModeService
  ]

})
export class UtilitiesModule {}
