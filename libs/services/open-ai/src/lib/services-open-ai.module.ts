import { OpenAIService } from './openai.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [OpenAIService]
})
export class ServicesOpenAiModule {}
