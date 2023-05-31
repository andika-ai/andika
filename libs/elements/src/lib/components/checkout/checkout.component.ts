import { AfterViewInit, Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';


@Component({
  selector: 'andika-app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  public payPalConfig ? : IPayPalConfig;
  showSuccess = false;
  showError = false;
  showCancel = false;
  closeIcon: HTMLElement;
  openIcon: HTMLElement;
  dropdown: HTMLElement;
  text: HTMLElement;

  plans = [
    {
      name: 'Start',
      description: 'Generate 10k* characters per month',
      disabled: false,
      features: [
        'Access 40+ use-cases',
        'Write in 30+ languages',
        'Access 20+ tones',
      ],
      monthly_price: 'Free',
      yearly_price: 0,
      duration: 'Start for free',
      buttonText: 'Upgrade',
    },
    {
      name: 'Saver Plan',
      description: 'Generate 100k* characters per month',
      disabled: false,
      features: [
        'Access 40+ use-cases',
        'Write in 30+ languages',
        'Access 20+ tones',
      ],
      monthly_price: '$9',
      yearly_price: '$99',
      duration: '/ mo',
      buttonText: 'Upgrade',
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
        'Priority email & chat support',
      ],
      monthly_price: '$29',
      yearly_price: '$129',
      duration: '/ mo',
      buttonText: 'Upgrade',
    },
  ];
  selectedPaymentOption = '';

  constructor() {

  }

  ngOnInit() {
    this.closeIcon = document.getElementById('closeIcon') as HTMLElement;
    this.openIcon = document.getElementById('openIcon') as HTMLElement;
    this.dropdown = document.getElementById('dropdown') as HTMLElement;
    this.text = document.getElementById('changetext') as HTMLElement;


    
  }

  ngAfterViewInit(){
    this.initConfig();
  }

  showMenu(flag: boolean): void {
    if (flag) {
      this.closeIcon.classList.toggle('hidden');
      this.openIcon.classList.toggle('hidden');
      this.dropdown.classList.toggle('hidden');
    } else {
      this.closeIcon.classList.toggle('hidden');
      this.openIcon.classList.toggle('hidden');
      this.dropdown.classList.toggle('hidden');
    }
  }

  changeText(country: string): void {
    this.text.innerHTML = country;
    this.closeIcon.classList.toggle('hidden');
    this.openIcon.classList.toggle('hidden');
    this.dropdown.classList.toggle('hidden');
  }



  updatePlans(paymentOption: string) {
    this.selectedPaymentOption = paymentOption;
    this.filterPlans();
  }

  filterPlans() {
    if (this.selectedPaymentOption === 'monthly') {
      this.plans = this.plans.filter(plan => plan.monthly_price !== 'Free');
    } else if (this.selectedPaymentOption === 'yearly') {
      this.plans = this.plans.filter(plan => plan.yearly_price !== 0);
    }
  }

  getPlanPrice(plan: any): string {
    return this.selectedPaymentOption === 'monthly' ? plan.monthly_price : plan.yearly_price;
  }


  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: "AQYGpLH6EZhencgQY2F66zyTI0sRtns9IJwAkKSAz2EdrboUE5BMc7OWikcoOWmN2SWw6VfzwJ8_I9gD",
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            // this.resetStatus();
        }
    };
}
}


