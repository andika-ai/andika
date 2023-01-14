/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ElementsModule } from '@andika/elements';
import { HomeRouterModule } from './home-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { EditorComponent } from './pages/editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
    ElementsModule
  ],

  declarations: [
    LandingComponent,
    EditorComponent
  ]
})
export class FeaturesHomeModule {}
