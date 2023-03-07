import { CompletionModel, EmbeddingModel } from "./openai-model";
import { OpenaiApiOperation } from "./openai-api-operation";

interface CostEstimatorConfigBase {
    model: CompletionModel | EmbeddingModel;
    operation: OpenaiApiOperation;
    prompt: string;
}

export interface CompletionCostEstimatorConfig extends CostEstimatorConfigBase {
    n?: number;
    bestOf?: number;
    maxTokens?: number;
}

export interface EmbeddingCostEstimatorConfig extends CostEstimatorConfigBase {
}

export type CostEstimatorConfig =
    | CompletionCostEstimatorConfig
    | EmbeddingCostEstimatorConfig;