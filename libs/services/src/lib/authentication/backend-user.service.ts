import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { EnvironmentProvider } from '@andika/config';

@Injectable()
export class BackendUserService {
private baseUrl = this._environmentProvider.environment.apiRoot;
constructor(private _http: HttpClient, private _environmentProvider: EnvironmentProvider) { }


saveNewSocialUser(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post(`${this.baseUrl}`, payload, { headers });
  }


  userEmailLogin(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post(`${this.baseUrl}/get_token/`, payload, { headers });
  }

  userEmailRegister(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post(`${this.baseUrl}/register/`, payload, { headers });
  }

}
