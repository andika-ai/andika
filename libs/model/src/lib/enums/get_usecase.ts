import { UseCase } from "./usecase.enum";

export function getUseCaseFromString(useCaseString: string): UseCase | undefined {
    const useCaseEntries = Object.entries(UseCase);
  
    for (const [key, value] of useCaseEntries) {
      if (value === useCaseString) {
        return UseCase[key as keyof typeof UseCase];
      }
    }
  
    return undefined;
  }