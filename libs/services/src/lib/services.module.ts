import { OrgTokenManagementService } from './org-token-management/org-token-management.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiService } from './openai/openai.service';
import { SubscriptionService } from './subscription/subscription.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [CommonModule],
  providers: [OpenaiService, OrgTokenManagementService, SubscriptionService, UserService]
})
export class ServicesModule {}
