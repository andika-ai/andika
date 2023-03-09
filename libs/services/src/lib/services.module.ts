import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiService } from './openai/openai.service';

@NgModule({
  imports: [CommonModule],
  providers: [OpenaiService]
})
export class ServicesModule {}
