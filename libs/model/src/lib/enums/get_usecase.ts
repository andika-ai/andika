import { UseCase } from "./usecase.enum";
//TODO:FIXME add logger doesnt throw error fix later
export function getUseCaseFromString(useCaseString: string): UseCase {

  console.log(useCaseString)
  debugger
  const useCaseEntries = Object.entries(UseCase);
  for (const [key, value] of useCaseEntries) {
    if (value === useCaseString) {
      return UseCase[key as keyof typeof UseCase];
    }
  }

  throw new Error(`Invalid use case string: ${useCaseString}`);
}
