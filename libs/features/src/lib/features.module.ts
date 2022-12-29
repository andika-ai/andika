
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ElementsModule } from '@andika/elements';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
  ],
  exports:[
    LandingComponent
  ]
})
export class FeaturesModule {}
