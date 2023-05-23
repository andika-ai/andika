// import firebase from 'firebase/compat/app';
import { SubscriptionPeriod } from './subscription-period.interface';

export interface Invoice {
    id: number;
    userId: string;
    amount: number;
    subscription_id: number;
    paymentMethod: string;
    date: Date;
    dateDue: Date;
    isPaid: boolean;
    subscriptionPeriod: SubscriptionPeriod;
  }