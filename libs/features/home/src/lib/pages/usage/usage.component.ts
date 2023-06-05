import { Component, OnInit } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ChartConfiguration, ChartType } from 'chart.js';


// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CreditCard, CreditCardValidators } from 'angular-cc-library';
import { defer } from 'rxjs';
import { map } from 'rxjs/operators';


import {
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  submitted = false;
  loading=true;
  plans = [
    {
      name: 'Start',
      description: 'Generate 10k* characters per month',
      disabled: false,
      features: [
        'Access 40+ use-cases',
        'Write in 30+ languages',
        'Access 20+ tones'
      ],
      price: 'Free',
      duration: 'Start for free',
      buttonText: 'Upgrade'
    },
    {
      name: 'Saver Plan',
      description: 'Generate 100k* characters per month',
      disabled: false,
      features: [
        'Access 40+ use-cases',
        'Write in 30+ languages',
        'Access 20+ tones'
      ],
      price: '$9',
      duration: '/ mo',
      buttonText: 'Upgrade'
    },
    {
      name: 'Unlimited Plan',
      description: 'Generate UNLIMITED* characters per month',
      disabled: false,
      features: [
        'Access 40+ use-cases',
        'Write in 30+ languages',
        'Access 20+ tones',
        'Create your own custom use-case',
        'Dedicated account manager',
        'Priority email & chat support'
      ],
      price: '$29',
      duration: '/ mo',
      buttonText: 'Upgrade'
    }
  ];
  isBasicPlanDisabled =true;
  isProPlanDisabled = true;
  isUnlimitedPlanDisabled = true;

  selectedPlan: any = null;

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ],
    datasets: [
      { 
        data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000, 49900, 50000, 6000,10000,20000 ], label: 'Total Characters', backgroundColor: '#BFDBFE', barThickness: 20,  },
        
    ],
 
  };

  public barChartOptions: ChartConfiguration<ChartType, number[], string>['options'] = {
    responsive: true, // Set to true to make the chart responsive
    maintainAspectRatio: false, // Set to false to allow the chart to adjust its size within its container
    scales: {
      x: {
        display: true,        // show/ hide x-axis
        grid: {
          display: true      // show/hide grid line in x-axis
        },
      },
      y: {
        display:true,      // same as x-axis
        grid: {
          display: true
        }
      }
    }
  };


  faCreditCard = faCreditCard;
  public form: FormGroup;

  
  constructor(private _fb: FormBuilder) { }

  togglePlan(plan: any): void {
    // Add your logic here to handle the plan selection
    console.log(plan);
  }
  ngOnInit() {
    this.form = this._fb.group({
      cardNumber: ['', [CreditCardValidators.validateCCNumber]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });

    this.loading=false;
  }




  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log(form);
  }

}
