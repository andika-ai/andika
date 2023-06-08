// import { ElementRef, Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class PaypalService {



//   constructor() {
//   }

//   public async initScript(el: ElementRef) {
//     try {
//       this.paypal = await loadScript({ clientId: "AQYGpLH6EZhencgQY2F66zyTI0sRtns9IJwAkKSAz2EdrboUE5BMc7OWikcoOWmN2SWw6VfzwJ8_I9gD" });
//       if (this.paypal) {
//         try {
//           const buttons = this.paypal.Buttons?.();
//           if (buttons) {
//             await buttons.render(el.nativeElement);
//           }
//         } catch (error) {
//           console.error("Failed to render the PayPal Buttons", error);
//         }
//       }
//       console.log('PayPal initialized.');
//     } catch (error) {
//       console.error("Failed to load the PayPal JS SDK script", error);
//     }
//   }
  

//   createSubscription() {
//     return this.paypal?.Buttons


//     // return this.paypal.subscription.create({
//     //   plan_id: 'your-plan-id'
//     // });
//   }

//   // Other methods and functionalities of PaypalService

//   // renderBtns(domElement: any) {
//   //   if (this.paypal?.Buttons) {
//   //     const x = this.paypal.Buttons({
//   //       style: {
//   //         layout: 'vertical',
//   //         color: 'blue',
//   //         shape: 'rect',
//   //         label: 'paypal'
//   //       }
//   //     }).render(domElement);
//   //   }
//   // }
  
  
// }
