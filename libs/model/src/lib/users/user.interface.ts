export interface User {
    id?: string;
    is_verified?: string;
    display_name?: string;
    first_name?: string;
    last_name?: string;
    photo_url?: string;
    pricing_plan?: string;
    email?: string;
    token?: string;
    subscriptionDate?: Date;
    tokens?: number;
    default_token_limit?: number;
    username?: string;
    subscription_plan?: string;
    subscription_start_date?: Date;
    subscription_end_date?: Date;
    
}