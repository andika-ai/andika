import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NgModule } from '@angular/core';
import { DarkModeService } from './ui/services/dark-mode.service';
import { BreadcrumbService } from './ui/services/bread-crumb.service';
import { TourService } from './ui/services/tour.service';
import { CacheService } from './localstorage/cache.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ],
  providers: [
    CacheService,
    DarkModeService,
    BreadcrumbService,
    TourService,
  ]

})
export class UtilitiesModule {}
