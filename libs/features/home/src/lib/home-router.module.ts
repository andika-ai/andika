import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EditorComponent } from './pages/editor/editor.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AccountComponent } from './pages/account/account.component';

const HOME_ROUTES: Route[] = [
    { path: 'dashboard', component: DashboardComponent}, 
    { path: 'account', component: AccountComponent}, 
    { path: '', component: LandingComponent}, // Home when user not logged in
    { path: 'edit', component: EditorComponent }, //home when user loggged in
];

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule]
})
export class HomeRouterModule { }
