export interface PricingPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    durationMonths: number;
    features: string[];
    charactersPerMonth: number;
    imagesPerMonth: number;
    teamSize?: number; // optional property indicating the number of team members included in the plan
    customBranding?: boolean; // optional property indicating whether custom branding is included in the plan
    prioritySupport?: boolean; // optional property indicating whether priority support is included in the plan
    fileStorageLimit?: number; // optional property indicating the limit of file storage included in the plan
    customerSuccessManager?: boolean; // optional property indicating whether a dedicated customer success manager is included in the plan
    freeTrialDays?: number; // optional property indicating the number of free trial days for the plan
    isRecommended?: boolean; // optional property indicating whether the plan is recommended or not
    isPopular?: boolean; // optional property indicating whether the plan is popular or not
    isDiscounted?: boolean; // optional property indicating whether the plan is currently being offered at a discounted price
    discountPercentage?: number; // optional property indicating the percentage discount being offered for the plan, if applicable
    renewalDiscountPercentage?: number; // optional property indicating the percentage discount being offered for plan renewals, if applicable
    upgradeFee?: number; // optional property indicating the fee for upgrading to this plan from a lower-tier plan
    downgradeFee?: number; // optional property indicating the fee for downgrading to this plan from a higher-tier plan
    unlimitedCharacters?: boolean; // optional property indicating whether the plan has unlimited characters
}


/**
 * 
 *  These properties provide additional information about the pricing plan, such as the number of team members included, whether custom branding or priority support is provided, and if there is a file storage limit. The customerSuccessManager property indicates whether the plan includes a dedicated customer success manager.
 * The freeTrialDays property indicates the number of free trial days for the plan, if any. The isRecommended and isPopular properties indicate whether the plan is recommended or popular, respectively. 
 * The isDiscounted property indicates whether the plan is currently being offered at a discounted price. The discountPercentage property indicates the percentage discount being offered for the plan, if applicable. The renewalDiscountPercentage property indicates the percentage discount being offered for plan renewals, if applicable.

The upgradeFee and downgradeFee properties indicate the fees for upgrading to or downgrading from this plan, respectively. These properties can be useful for customers who may be considering changing their plan.




 */