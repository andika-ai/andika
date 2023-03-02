import { APIToken } from "@andika/model";

export class APITokenService {
    private apiTokens: APIToken[] = [];

    createAPIToken(userId: number, tokenLimit: number): APIToken {
        const newAPIToken: APIToken = {
            id: this.apiTokens.length + 1,
            user_id: userId,
            token: this.generateToken(),
            token_limit: tokenLimit,
            created_at: new Date(),
        };
        this.apiTokens.push(newAPIToken);
        return newAPIToken;
    }

    generateToken(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    getAPITokenById(apiTokenId: number): APIToken | undefined {
        return this.apiTokens.find((apiToken) => apiToken.id === apiTokenId);
    }

    getAPITokenByUserId(userId: number): APIToken | undefined {
        return this.apiTokens.find((apiToken) => apiToken.user_id === userId);
    }
}