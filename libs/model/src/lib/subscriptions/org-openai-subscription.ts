/**
 * @property apiKey (string): The API key for the OpenAI subscription.
 * @property totalTokens (number): The total number of tokens purchased by the organization.
 * @property remainingTokens (number): The number of tokens remaining in the subscription.
 * @property monthlyLimit (number): The monthly token limit for the subscription.
 * @property lastTopUp (Date): The date of the last top-up for the subscription.
 */
export interface OrgOpenAISubscription {
    id?: string;
    apiKey?: string; // The API key for the OpenAI subscription
    totalTokens?: number; // The total number of tokens purchased by the organization
    remainingTokens?: number; // The number of tokens remaining in the subscription
    monthlyLimit?: number; // The monthly token limit for the subscription
    lastTopUp?: Date; // The date of the last top-up for the subscription
    created?: Date,
    modified?: Date,
    createdBy?: string,
    // updateRemainingTokens(tokensUsed: number): void; // A method to update the remaining tokens when tokens are used
}