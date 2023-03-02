export interface TokenUsage {
    id: number;
    apiToken_id: number;
    requestTime: Date;
    charactersGenerated: number;
    typeOfText: string;
    additionalInformation?: string;
  }