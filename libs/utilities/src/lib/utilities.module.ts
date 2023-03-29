import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NgModule } from '@angular/core';
import { DarkModeService } from './ui/services/dark-mode.service';
import { ScreenService } from './ui/services/screen.service';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ],
  providers: [
    DarkModeService,
    ScreenService,
  ]

})
export class UtilitiesModule {}
