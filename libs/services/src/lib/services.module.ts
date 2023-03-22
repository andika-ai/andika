import { OrgTokenManagementService } from './org-token-management/org-token-management.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiService } from './openai/openai.service';

@NgModule({
  imports: [CommonModule],
  providers: [OpenaiService, OrgTokenManagementService]
})
export class ServicesModule {}
