import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class BackendUserService {
private apiUrl = 'http://localhost:8000/social_auth'; // Replace with your API URL
private rapidApiHost = 'RAPID_API_HOST'; // Replace with your RapidAPI host
private rapidApiKey = 'RAPID_API_KEY'; // Replace with your RapidAPI key
constructor(private _http: HttpClient) { }


saveUserData(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    return this._http.post(`${this.apiUrl}/google/`, payload, { headers });
  }

}
