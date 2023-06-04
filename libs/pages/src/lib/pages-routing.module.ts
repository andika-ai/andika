import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PricingComponent } from './components/pricing/pricing.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { LandingComponent } from './components/landing/landing.component';
import { IntergrationComponent } from './components/intergration/intergration.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/FAQ/FAQ.component';
import { FeaturesComponent } from './components/features/features.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { AuthGuard } from '@andika/libs/shared';


const PAGES_ROUTES: Route[] = [
    { path: 'onboarding', component: OnboardingComponent, canActivate: [AuthGuard]}, 
    { path: 'terms-of-service', component: TermsOfServiceComponent}, 
    { path: 'privacy-notice', component: PrivacyNoticeComponent}, 
    { path: '', component: LandingComponent},
    { path: 'pricing', component: PricingComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'intergration', component:IntergrationComponent},
    { path: 'support', component: ContactUsComponent},
    { path: 'faq', component: FAQComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'resources', component: ResourcesComponent},
 
];

@NgModule({
    imports: [RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
