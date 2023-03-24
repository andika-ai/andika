import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './pages/admin-dashboard/settings/settings.component';

const ADMIN_ROUTES: Route[] = [
    { path: 'admin', component: AdminDashboardComponent}, 
    { path: 'admin/settings', component: SettingsComponent}, // Home when user not logged in
    // { path: 'edit', component: EditorComponent }, //home when user loggged in
];

@NgModule({
    imports: [RouterModule.forChild(ADMIN_ROUTES)],
    exports: [RouterModule]
})
export class AdminRouterModule { }
