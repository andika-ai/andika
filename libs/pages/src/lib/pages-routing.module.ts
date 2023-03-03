import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const PAGES_ROUTES: Route[] = [
    // { path: 'pricing', component: LoginComponent},
    // { path: 'resources', component: RegisterComponent},
    // { path: 'intergration', component: RegisterComponent},
    // { path: 'support', component: RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
