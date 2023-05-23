import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { IntergrationComponent } from './components/intergration/intergration.component';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@andika/libs/material'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesRoutingModule } from './pages-routing.module';
import { PricingComponent } from './components/pricing/pricing.component';
// import { ResourcesComponent } from './components/resources/resources.component';
// import { SupportComponent } from './components/support/support.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    ElementsModule,
    FontAwesomeModule,
  ],

  declarations: [
    // IntergrationComponent,
    PricingComponent,
    // CheckoutComponent,
    // ResourcesComponent,
    // SupportComponent

  ]
})
export class PagesModule {}
