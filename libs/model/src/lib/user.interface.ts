import { SubscriptionStatus } from "./subscriptions/subscription-status.interface";


export interface User {
    uid?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    emailVerified?: boolean;
    isSubscribed?: boolean;
    subscriptionDate?: Date;
    tokens?: number;
    default_token_limit?: number;
    username?: string;
    password?: string;
    subscription_plan?: string;
    subscription_status?: SubscriptionStatus;
    subscription_start_date?: Date;
    subscription_end_date?: Date;
    
}