import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PricingComponent } from './components/pricing/pricing.component';


const PAGES_ROUTES: Route[] = [
    { path: 'pricing', component: PricingComponent},
    { path: 'checkout', component: CheckoutComponent},
    // { path: 'intergration', component: RegisterComponent},
    // { path: 'support', component: RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
