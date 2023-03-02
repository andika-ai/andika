export interface Subscription {
    id: number;
    user_id: number;
    subscription_plan: string;
    subscription_start_date: Date;
    subscription_end_date: Date;
    subscription_price: number;
}