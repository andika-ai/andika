import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { loadScript } from "@paypal/paypal-js";

@Component({
  selector: 'andika-app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  // public payPalConfig ? : IPayPalConfig;
  @ViewChild('paypalRef', { static: true }) private paypalRef: Element
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
  // selectedPaymentOption = '';

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg'
  };

  paidFor = false;

  public selectedPaymentOption = 'monthly';
  // public payPalConfig: PayPalScriptOptions

  constructor(private router: Router) {

  }

  ngOnInit() {
  console.log('-----')
    
  }





  // updatePlans(paymentOption: string) {
  //   this.selectedPaymentOption = paymentOption;
  //   this.filterPlans();
  // }

  filterPlans() {
    if (this.selectedPaymentOption === 'monthly') {
      this.plans = this.plans.filter(plan => plan.monthly_price !== 'Free');
    } else if (this.selectedPaymentOption === 'yearly') {
      this.plans = this.plans.filter(plan => plan.yearly_price !== 0);
    }
  }

  // getPlanPrice(plan: any): string {
  //   return this.selectedPaymentOption === 'monthly' ? plan.monthly_price : plan.yearly_price;
  // }


  public updatePlans(paymentOption: string): void {
    this.selectedPaymentOption = paymentOption;
  }

  public getPlanPrice(plan: any): string {
    return this.selectedPaymentOption === 'monthly' ? plan.monthly_price : plan.yearly_price;
  }


  renderPaypalButton() {
     
    loadScript({ clientId: "AQYGpLH6EZhencgQY2F66zyTI0sRtns9IJwAkKSAz2EdrboUE5BMc7OWikcoOWmN2SWw6VfzwJ8_I9gD", currency: 'USD'})
    .then((paypal: any) => {
      
      paypal.Buttons({
        style: {
          layout: 'vertical',
          color:  'blue',
          shape:  'rect',
          label:  'paypal'
        },
      }).render(this.paypalElement.nativeElement);
    })
    .catch((error) => {
        console.error("failed to load the PayPal JS SDK script", error);
    });
 
    
  }


//   paypal.Buttons({
//     createSubscription: function (data, actions) {
//         return actions.subscription.create(
//             'plan_id': 'P-xxxx',
//             'subscriber': {
//                 'name': {
//                     'given_name': 'customer',
//                     'surname': 'customer'
//                 },
//                 'email_address': 'customer@example.com'
//             }
//         });
//     },
//     onApprove: function (data, actions) {
//         console.log('subscription id: ', data.subscriptionID)
//     }
// }).render('#paypal-button-container');
    
  // paypalRedirect(status: any, orderRef) {
    
  //   switch (status) {
  //     case 'COMPLETED':
  //       this.router.navigate(['/result/success/' + orderRef]);
  //       break;       
  //     case 'ERROR':
  //       this.router.navigate(['/result/error/' + orderRef]);
  //       break;
  //     default:
  //       this.router.navigate(['/result/error/' + orderRef]);
  //       break;
  //   }
   
// }


  // createSubscription(paymentOption: string) {
  //   this.paypalService.createSubscription()
  //     .then(response => {
  //       // Subscription created successfully
  //       console.log('Subscription created:', response);
  //     })
  //     .catch(error: any => {
  //       // Error occurred during subscription creation
  //       console.error('Error creating subscription:', error);
  //     });
  // }

}


