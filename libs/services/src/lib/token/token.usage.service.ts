import { TokenStatus } from "@andika/model";
import { APITokenService } from "./api-token.service";
import { UserService } from "../user/user.service";


// consider using akita here to track token usage
export class TokenUsageService {

    constructor(private userService: UserService, private apiTokenService: APITokenService) {

    }

    public async logTokenUsage(apiTokenId: number, requestTime: string, charactersGenerated: number, typeOfText: string, additionalInformation?: string) {
        // Check if the user's token limit has been exceeded
        const token = await this.apiTokenService.getAPITokenById(apiTokenId) as any;

        const user = await this.userService.getUserById(token.userId);
        if (token.charactersGenerated + charactersGenerated >= token.tokenLimit) {
            // Deplete the token limit and set its status as "depleted"
            token.tokenLimit = 0;
            token.status = TokenStatus.DEPLETED;
            await token.save();
        }
    }
}