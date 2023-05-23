import { Component, OnInit } from '@angular/core';

import { PricingPlan, SubscriptionPlan  } from '@andika/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PricingPlanService } from '@andika/services';


@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  pricingPlanForm: FormGroup;
  subscriptionPlan = SubscriptionPlan
  responseMessage: string;
  constructor(private fb: FormBuilder,
              private _pricingPlanService: PricingPlanService ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.pricingPlanForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      durationMonths: ['', [Validators.required, Validators.min(1)]],
      features: [[]],
      charactersPerMonth: ['', [Validators.required, Validators.min(0)]],
      imagesPerMonth: ['', [Validators.required, Validators.min(0)]],
      teamSize: [''],
      customBranding: [''],
      prioritySupport: [''],
      fileStorageLimit: [''],
      customerSuccessManager: [''],
      freeTrialDays: [''],
      isRecommended: [''],
      isPopular: [''],
      isDiscounted: [''],
      discountPercentage: ['', Validators.max(100)],
      renewalDiscountPercentage: ['', Validators.max(100)],
      upgradeFee: [''],
      downgradeFee: [''],
      unlimitedCharacters: ['']
    });
  
  }

  /**
   * {
    "name": "basic",
    "description": "test",
    "price": 1,
    "durationMonths": 1,
    "features": "test",
    "charactersPerMonth": 1,
    "imagesPerMonth": 1,
    "teamSize": 1,
    "customBranding": true,
    "prioritySupport": true,
    "fileStorageLimit": 1,
    "customerSuccessManager": true,
    "freeTrialDays": -3,
    "isRecommended": true,
    "isPopular": true,
    "isDiscounted": true,
    "discountPercentage": 1,
    "renewalDiscountPercentage": 1,
    "upgradeFee": 1,
    "downgradeFee": 1
}
   */
  onSubmit() {
    const pricingPlan: PricingPlan = this.pricingPlanForm?.value;
    
    // this._pricingPlanService.addPricingPlan(pricingPlan)
    //   .then(res=>{
    //     console.log('created')
    //     console.log(res)
    //   })
    //   .catch(error=>{
    //     this.responseMessage = error.message;
    //   })
  }


}
