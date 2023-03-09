import { ENDPOINTS } from './enpoints';
import { PromptFormI, UseCase } from '@andika/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class OpenaiService {
private baseUrl = 'http://127.0.0.1:4401/andika-16cf6/us-central1/';
constructor(private _http: HttpClient) { }


    post(data: any, usecase: UseCase): Observable<any> {
        const url =  this._getUrl(usecase);
        console.log(url)
        return this._http.post(url, data).pipe(
            map(response => response)
        );
    }


    /**
     * Determines which cloud function to be triggered  based on the use case .
     */
    private _determineUseCase(usecase: UseCase){



    }

    /**
     * Get End point for usecase 
     * edge case if there is no endpoint
     */
    private _getUrl(useCase: UseCase){
        const action = ENDPOINTS.filter(e=>e.usecase === useCase)
        const url = this.baseUrl+action[0].endpoint;
        return url;
    }


}
