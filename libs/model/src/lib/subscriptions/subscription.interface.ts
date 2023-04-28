export interface Subscription {
    id?: string;
    user_id?: number;
    subscription_plan?: string;
    subscription_start_date?: Date;
    subscription_end_date?: Date;
    subscription_price?: number;
    is_active?: boolean;
}