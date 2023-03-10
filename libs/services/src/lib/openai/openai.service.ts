import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Endpoint, PromptFormI, UseCase} from '@andika/model';

import { ENDPOINTS } from './enpoints';



@Injectable()
export class OpenaiService {
constructor(private _http: HttpClient) { }

    /***
     * Generic POST method
     * This code defines a generic post method that is used to make a POST request to a server API using HttpClient.
     * The method has two type parameters, TRequest and TResponse, which represent the types of the request data and response data, respectively.
     * @param data
     * @param usecase
     * @returns {TResponse} Observable
     */
    post<TRequest, TResponse>(
        data: TRequest,
        usecase: UseCase
    ): Observable<TResponse> {
        // Build the URL for the HTTP request using the provided use case
        const url = this._getEndpoint(usecase).endpoint;
        // Send the HTTP request and return the response as an observable
        return this._http.post<TResponse>(url, data).pipe(
            // Catch any errors that occur during the HTTP request
            catchError(error => {
                // Rethrow the error to propagate it to the caller
                return throwError(error);
            })
        );
    }

    /**
     * Generic Get method
     * @param http
     * @param url
     * @param params
     */
    get<T>(
        http: HttpClient,
        url: string,
        params?: any
    ): Observable<T> {
        return http.get<T>(url, { params }).pipe(
            catchError(error => {
                // Rethrow the error to propagate it to the caller
                return throwError(error);
            })
        );
    }

    /***
     * Gets the cloud function endpoint for the specified use case.
     * @param useCase
     */
    private _getEndpoint(useCase: UseCase): Endpoint {
        // Find the endpoint that matches the provided use case
        const endpoint = ENDPOINTS.find(e => e.usecase === useCase);
        if (!endpoint) {
            // If no endpoint is found, throw an error indicating that the use case is not supported
            throw new Error(`Unsupported use case: ${useCase}`);
        }
        return endpoint;
    }


}
