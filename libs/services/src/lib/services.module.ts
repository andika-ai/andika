// import { OrgTokenManagementService } from './org-token-management/org-token-management.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { OpenaiService } from './openai/openai.service';
import { SubscriptionService } from './subscription/subscription.service';
import { UserService } from './user/user.service';
import { PricingPlanService } from './pricing-plan/pricing-plan.service';
import { UsecaseService } from './usecase/usecase.service';
import { PromptService } from './prompt/prompt.service';
import { BackendUserService } from './authentication/backend-user.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    // OpenaiService,
    // OrgTokenManagementService,
    SubscriptionService,
    UserService,
    PricingPlanService,
    UsecaseService,
    PromptService,
    BackendUserService
  ]
})
export class ServicesModule {}
