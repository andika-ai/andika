import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentProvider } from '@andika/config';

@Injectable()
export class PromptService {
private apiBaseUrl = this._environmentProvider.environment.apiRoot;
constructor(private http: HttpClient, private _environmentProvider: EnvironmentProvider) { }



postPrompt(payload: any) {
    return this.http.post(`${this.apiBaseUrl}/prompt/completion/`, {payload: payload});
  }

}


