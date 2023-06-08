import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { loadScript } from "@paypal/paypal-js";

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  public paypal: any;

  constructor() {
    this.initScript();
  }

  private async initScript() {
    try {
      this.paypal = await loadScript({ clientId: "AQYGpLH6EZhencgQY2F66zyTI0sRtns9IJwAkKSAz2EdrboUE5BMc7OWikcoOWmN2SWw6VfzwJ8_I9gD" });
    } catch (error) {
      console.error("Failed to load the PayPal JS SDK script", error);
    }
  }

  // Other methods and functionalities of PaypalService

}
