import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';

import { QuillModule } from 'ngx-quill'
import { EditorComponent } from './components/editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, QuillModule, ReactiveFormsModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    EditorComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    EditorComponent,
  ]
})
export class ElementsModule {}
