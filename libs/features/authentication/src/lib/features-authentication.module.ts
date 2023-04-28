import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationRouterModule } from './features-authentication.routing';
import { SharedModule } from '@andika/libs/shared';
import { AuthService, UtilitiesModule } from '@andika/libs/utilities';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@andika/libs/material'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ElementsModule } from '@andika/elements';
@NgModule({
  imports: [ 
    CommonModule,
    ElementsModule,// not required in the app leveapp.module TODO: investigate
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRouterModule, UtilitiesModule],
    declarations: [
      LoginComponent,
      RegisterComponent
    ],
    exports: [
      LoginComponent,
      RegisterComponent
    ],
    providers:  [AuthService]
})
export class FeaturesAuthenticationModule {}
