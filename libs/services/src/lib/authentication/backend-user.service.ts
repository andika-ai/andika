import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class BackendUserService {
private apiUrl = 'http://localhost:8000/api/v1/social_auth/'; // Replace with your API URL

constructor(private _http: HttpClient) { }


saveNewSocialUser(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post(`${this.apiUrl}`, payload, { headers });
  }


  userEmailLogin(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post('http://localhost:8000/api/v1/get_token/', payload, { headers });
  }

  userEmailRegister(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post('http://localhost:8000/api/v1/register/', payload, { headers });
  }

}
