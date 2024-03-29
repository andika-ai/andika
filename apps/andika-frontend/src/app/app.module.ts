// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AdminModule } from './../../../../libs/features/admin/src/lib/admin.module';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'
import { MaterialModule } from '@andika/libs/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

// ✨ New 👇
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { PagesModule } from '@andika/pages';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { environment } from '@andika/config';
import { JwtInterceptor } from '@andika/libs/utilities';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    //
    // FormsModule,    //added here too
    // ReactiveFormsModule,//added here too
    HttpClientModule,
    // MaterialModule,
    // ElementsModule,
    FeaturesHomeModule,
    PagesModule,
    AdminModule,
    FeaturesAuthenticationModule,
    NgxMatSelectSearchModule,
    ClipboardModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()), // Quill Angular WYSIWYG Editor Module 
    // ✨ New 👇
    environment.production
    ? []
    : AkitaNgDevtools.forRoot({
        maxAge: 25,
      }),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


