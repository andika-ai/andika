import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable()
export class UsecaseService {
private apiUrl = 'http://localhost:8000/api/v1'; // Replace with your API URL
constructor(private http: HttpClient) { }



getData() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.get(`${this.apiUrl}/usecases/`, { headers });
  }

}
