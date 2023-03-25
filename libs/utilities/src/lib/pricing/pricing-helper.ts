import { PricingPlan } from "@andika/model";


export function calculateTotalPrice(plan: PricingPlan): number {
    const totalPrice = plan.price * plan.durationMonths;
    return totalPrice;
}


// Calculates the price per month of a pricing plan
export function calculatePricePerMonth(plan: PricingPlan): number {
    return plan.price / plan.durationMonths;
}

// Determines whether a plan includes custom branding
export function includesCustomBranding(plan: PricingPlan): boolean {
    return !!plan.customBranding;
}

// Determines whether a plan includes priority support
export function includesPrioritySupport(plan: PricingPlan): boolean {
    return !!plan.prioritySupport;
}

// Determines whether a plan includes a dedicated customer success manager
export function includesCustomerSuccessManager(plan: PricingPlan): boolean {
    return !!plan.customerSuccessManager;
}

// Determines whether a plan is discounted
export function isDiscounted(plan: PricingPlan): boolean {
    return !!plan.isDiscounted;
}

// Calculates the discounted price of a plan, if applicable
export function calculateDiscountedPrice(plan: PricingPlan): number {
    if (isDiscounted(plan)) {
        return plan.price * (1 - plan.discountPercentage / 100);
    } else {
        return plan.price;
    }
}

// Calculates the renewal price of a plan, if applicable
export function calculateRenewalPrice(plan: PricingPlan): number {
    if (isDiscounted(plan)) {
        return calculateDiscountedPrice(plan) * (1 - plan.renewalDiscountPercentage / 100);
    } else {
        return plan.price;
    }
}

// Calculates the fee for upgrading to a plan
export function calculateUpgradeFee(plan: PricingPlan): number {
    if (plan.upgradeFee) {
        return plan.upgradeFee;
    } else {
        return 0;
    }
}

// Calculates the fee for downgrading from a plan
export function calculateDowngradeFee(plan: PricingPlan): number {
    if (plan.downgradeFee) {
        return plan.downgradeFee;
    } else {
        return 0;
    }
}
