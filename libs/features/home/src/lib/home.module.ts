/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { HomeRouterModule } from './home-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { EditorComponent } from './pages/editor/editor.component';
import { MaterialModule } from '@andika/libs/material'
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRouterModule,
    ElementsModule
  ],

  declarations: [
    LandingComponent,
    EditorComponent
  ]
})
export class FeaturesHomeModule {}
