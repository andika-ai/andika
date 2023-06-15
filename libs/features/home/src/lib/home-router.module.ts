import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EditorComponent } from './pages/editor/editor.component';
import { AccountComponent } from './pages/account/account.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { UsageComponent } from './pages/usage/usage.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from '@andika/libs/shared';
// import { StudioComponent } from './pages/studio/studio.component';
// import { AudioComponent } from './pages/audio/audio.component';

const HOME_ROUTES: Route[] = [
    { path: 'dashboard', component: DashboardComponent}, 
    { path: 'usage', component: UsageComponent, canActivate: [AuthGuard]}, 
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
    { path: 'documents', component: DocumentsComponent, canActivate: [AuthGuard]},
    { path: 'account', component: AccountComponent,canActivate: [AuthGuard]}, 
    { path: 'history', component: UserHistoryComponent}, 
    { path: 'editor/:id', component: EditorComponent}, //home when user loggged in
    // { path: 'studio', component: StudioComponent }, //home when user loggged in
    // { path: 'audio', component: AudioComponent }, //home when user loggged in
];

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule]
})
export class HomeRouterModule { }
