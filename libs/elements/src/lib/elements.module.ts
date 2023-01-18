import { DocumentsComponent } from './components/documents/documents.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WriteFormComponent } from './components/write-form/write-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';

import { QuillModule } from 'ngx-quill'
import { EditorComponent } from './components/editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from '@andika/libs/material'
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MaterialModule, QuillModule, ReactiveFormsModule,  FormsModule],// do we need quill module here and the rest i think they should be in shared modules?
  declarations: [
    PreloaderComponent,
    HeroComponent,
    TopNavbarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    EditorComponent,
    WriteFormComponent,
    ToolbarComponent,
    SidebarComponent,
    AppFooterComponent,
    DocumentsComponent,
    NavbarComponent
  ],
  exports: [
    PreloaderComponent,
    HeroComponent,
    HeaderComponent,
    TopNavbarComponent,
    FooterComponent,
    NavbarComponent,
    EditorComponent,
    WriteFormComponent,
    ToolbarComponent,
    SidebarComponent,
    AppFooterComponent,
    DocumentsComponent,
    NavbarComponent
  ]
})
export class ElementsModule {}
