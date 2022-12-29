/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { FeaturesModule } from '@andika/features';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    //
    // FormsModule,
    // ReactiveFormsModule,
    // ElementsModule,
    // FeaturesModule,
    AppRoutingModule,
    QuillModule.forRoot() // Quill Angular WYSIWYG Editor Module 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
