import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@andika/libs/material'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesRoutingModule } from './pages-routing.module';
import { PricingComponent } from './components/pricing/pricing.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SupportComponent } from './components/support/support.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/FAQ/FAQ.component';
import { FeaturesComponent } from './components/features/features.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { IntegrationComponent } from './components/intergration/integration.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    ElementsModule,
    FontAwesomeModule,
  ],

  declarations: [
    IntegrationComponent,
    PricingComponent,
    ResourcesComponent,
    SupportComponent,
    OnboardingComponent,
    PrivacyNoticeComponent, 
    TermsOfServiceComponent,
    LandingComponent, 
    PricingComponent,
    CheckoutComponent,
    IntegrationComponent,
    ContactUsComponent,
    FAQComponent,
    FeaturesComponent,
    ResourcesComponent,

  ]
})
export class PagesModule {}
