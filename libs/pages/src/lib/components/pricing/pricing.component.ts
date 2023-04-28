import { Component, OnInit } from '@angular/core';

import { combineLatest } from 'rxjs';
import { SubSink } from 'subsink';

import { Subscription, SubscriptionPlan, User } from '@andika/model';
import { SubscriptionService, UserService } from '@andika/services';

import * as moment from 'moment';
import e from 'express';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  private _sbS = new SubSink();
  pricingPlan = SubscriptionPlan;
  activeUser: User;
  todayDate = moment();
  msg = '';
  constructor(private _userService: UserService, private _subscriptionService: SubscriptionService) {
    this.activeUser = this._userService.activeUser;
  }

  ngOnInit() {


  }


  /**
   * 
   * @param subscriptionPlan 



  *Using async/await instead of subscribing to observables.
  *Avoiding unnecessary type assertions.
  *Combining the subscription creation and user update into a single Promise.all call.
  *Cleaning up the message logging and alerting code.  
  */
  async addSubscription(subscriptionPlan: string) {
    const userId = this.activeUser.uid as string;
    // Get the user's subscriptions from the subscription service
    const subscriptions = await this._subscriptionService.getSubscriptionsByUserId(userId)
    // If the user has no subscriptions yet
    if (subscriptions.length === 0) {
      // Create a new subscription object with the provided plan
      const subscription = {
        user_id: this.activeUser.uid,
        subscription_plan: subscriptionPlan,
        subscription_start_date: this.todayDate.toDate(),
        subscription_end_date: this.todayDate.toDate(),
        subscription_price: 0,
        is_active: false,
      } as Subscription;
      // Add the new subscription to the subscription service
      await this._subscriptionService.addUserSubscription(subscription);
      this.activeUser = {
        ...this.activeUser,
        subscriptionDate: subscription.subscription_start_date,
        subscription_end_date: subscription.subscription_end_date,
        subscription_plan: subscription.subscription_plan,
      };
      // Update the active user's subscription details
      await this._userService.updateUser(this.activeUser);
      console.log('New subscription has been created');
      this.msg = 'New subscription has been created';
    } else {
      const lastSubscription = subscriptions[0];
      if (lastSubscription.subscription_plan !== subscriptionPlan) {
        lastSubscription.subscription_plan = subscriptionPlan;
        // Update the user data in the user service
        await Promise.all([
          this._subscriptionService.updateUserSubscription(lastSubscription),
          this._userService.updateUser({
            ...this.activeUser,
            subscription_plan: subscriptionPlan,
          }),
        ]);
        // Log a message indicating that a new subscription has been created
        console.log(`Subscription updated...${subscriptionPlan}`);
        this.msg = 'Subscription updated...';
      } else {
        console.log(`Subscription is already up to date..${subscriptionPlan}`);
        this.msg = 'Subscription is already up to date';
      }
    }
    alert(`Subscription ${this.msg}`);
  }



}
