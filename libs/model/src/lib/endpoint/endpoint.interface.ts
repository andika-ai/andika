import {UseCase} from "@andika/model";

export interface Endpoint {
    usecase: UseCase;
    endpoint: string;
}