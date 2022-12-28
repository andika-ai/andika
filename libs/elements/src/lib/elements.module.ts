import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class ElementsModule {}
