import { CompletionModel, EmbeddingModel } from "./openai-model";

export type CostPerToken<T extends CompletionModel | EmbeddingModel> = {
    [key in T]: number;
};