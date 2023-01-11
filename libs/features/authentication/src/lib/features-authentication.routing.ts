import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const AUTHENTICATION_ROUTES: Route[] = [
    { path: '', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forChild(AUTHENTICATION_ROUTES)],
    exports: [RouterModule]
})
export class AuthenticationRouterModule { }
