export interface TokenTransaction{
  id: number; // A unique identifier for each transaction. This could be an automatically generated ID or a combination of the user ID and timestamp.
  userId: string; // A foreign key referencing the user_id field in the Users collection. This field would indicate which user the transaction belongs to.
  date: Date; // The date and time of the transaction.
  tokensDeducted: number; // The number of tokens deducted from the user's balance for the transaction.
  reason: string; //  A brief description of why the tokens were deducted. This could be something like "purchased item", "used service", etc.
}
