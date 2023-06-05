import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { EnvironmentProvider } from '@andika/config';


@Injectable()
export class UsecaseService {
private apiBaseUrl = this._environmentProvider.environment.apiRoot;
constructor(private http: HttpClient,  private _environmentProvider: EnvironmentProvider) { }



getData() {
    const headers = new HttpHeaders()
    return this.http.get(`${this.apiBaseUrl}/usecases/`, { headers });
  }

}
