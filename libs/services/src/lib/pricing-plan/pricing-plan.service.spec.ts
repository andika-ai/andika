/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PricingPlanService } from './pricing-plan.service';

describe('Service: PricingPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricingPlanService]
    });
  });

  it('should ...', inject([PricingPlanService], (service: PricingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
