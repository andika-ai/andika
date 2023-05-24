import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const AUTHENTICATION_ROUTES: Route[] = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    
];

@NgModule({
    imports: [RouterModule.forChild(AUTHENTICATION_ROUTES)],
    exports: [RouterModule]
})
export class AuthenticationRouterModule { }
