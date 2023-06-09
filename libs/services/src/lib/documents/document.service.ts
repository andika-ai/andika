import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { EnvironmentProvider } from '@andika/config';
import { Draft } from '@andika/model';


@Injectable()
export class DocumentService {
private apiBaseUrl = this._environmentProvider.environment.apiRoot;
constructor(private http: HttpClient,  private _environmentProvider: EnvironmentProvider) { }



saveDocument(document: Draft) {
    const headers = new HttpHeaders()
    return this.http.post(`${this.apiBaseUrl}/documents/`, document, { headers });
  }

}
