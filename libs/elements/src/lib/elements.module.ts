import { WriteFormComponent } from './components/write-form/write-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';

import { QuillModule } from 'ngx-quill'
import { EditorComponent } from './components/editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, QuillModule, ReactiveFormsModule],// do we need quill module here and the rest i think they should be in shared modules?
  declarations: [
    FooterComponent,
    NavbarComponent,
    EditorComponent,
    WriteFormComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    EditorComponent,
    WriteFormComponent,
  ]
})
export class ElementsModule {}
