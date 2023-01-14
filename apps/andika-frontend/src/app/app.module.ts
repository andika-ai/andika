import { AuthService } from '@andika/libs/utilities';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { FeaturesAuthenticationModule } from '@andika/features/authentication';
import { FeaturesHomeModule } from '@andika/features/home';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { AppRoutingModule } from './app.routes';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';

import { FIREBASE_OPTIONS } from '@angular/fire/compat'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    //
    FormsModule,    //added here too
    ReactiveFormsModule,//added here too
    ElementsModule,
    FeaturesHomeModule,
    FeaturesAuthenticationModule,
    /////
    AppRoutingModule,
    QuillModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()) // Quill Angular WYSIWYG Editor Module 
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
