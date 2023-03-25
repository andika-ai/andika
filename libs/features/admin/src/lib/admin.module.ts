import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@andika/libs/material'
import { ElementsModule } from '@andika/elements';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminRouterModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitiesModule } from '@andika/libs/utilities';
import { SettingsComponent } from './pages/admin-dashboard/settings/settings.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ElementsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitiesModule,
    AdminRouterModule
  ],

  declarations: [
    AdminDashboardComponent,
    SettingsComponent
  ]
})
export class AdminModule {}
