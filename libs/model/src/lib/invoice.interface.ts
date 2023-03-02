import firebase from 'firebase/compat/app';
import { SubscriptionPeriod } from './subscription-period.interface';

export interface Invoice {
    id: number;
    userId: string;
    amount: number;
    subscription_id: number;
    paymentMethod: string;
    date: firebase.firestore.Timestamp;
    dateDue: firebase.firestore.Timestamp;
    isPaid: boolean;
    subscriptionPeriod: SubscriptionPeriod;
  }