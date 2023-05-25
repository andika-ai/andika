import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EditorComponent } from './pages/editor/editor.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AccountComponent } from './pages/account/account.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { PrivacyNoticeComponent } from './pages/privacy-notice/privacy-notice.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { UsageComponent } from './pages/usage/usage.component';
// import { StudioComponent } from './pages/studio/studio.component';
// import { AudioComponent } from './pages/audio/audio.component';

const HOME_ROUTES: Route[] = [
    { path: 'dashboard', component: DashboardComponent}, 
    { path: 'usage', component: UsageComponent}, 
    { path: 'terms-of-service', component: TermsOfServiceComponent}, 
    { path: 'privacy-notice', component: PrivacyNoticeComponent}, 
    { path: 'account', component: AccountComponent}, 
    { path: 'history', component: UserHistoryComponent}, 
    { path: '', component: LandingComponent}, // Home when user not logged in
    { path: 'edit', component: EditorComponent }, //home when user loggged in
    // { path: 'studio', component: StudioComponent }, //home when user loggged in
    // { path: 'audio', component: AudioComponent }, //home when user loggged in
];

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule]
})
export class HomeRouterModule { }
