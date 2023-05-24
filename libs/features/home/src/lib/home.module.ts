import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { HomeRouterModule } from './home-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { EditorComponent } from './pages/editor/editor.component';
import { MaterialModule } from '@andika/libs/material'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountComponent } from './pages/account/account.component';
// import { StudioComponent } from './pages/studio/studio.component';
// import { AudioComponent } from './pages/audio/audio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyNoticeComponent } from './pages/privacy-notice/privacy-notice.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRouterModule,
    ElementsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

  declarations: [
    LandingComponent,
    EditorComponent,
    DashboardComponent,
    UserHistoryComponent,
    AccountComponent,
    TermsOfServiceComponent,
    PrivacyNoticeComponent,
    FeaturesComponent,
    ContactComponent

    // StudioComponent,
    // AudioComponent

  ]
})
export class FeaturesHomeModule {}
