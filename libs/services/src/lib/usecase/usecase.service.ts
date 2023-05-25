import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class UsecaseService {
private apiUrl = 'http://localhost:8000/api/v1'; // Replace with your API URL
private rapidApiHost = 'RAPID_API_HOST'; // Replace with your RapidAPI host
private rapidApiKey = 'RAPID_API_KEY'; // Replace with your RapidAPI key
constructor(private http: HttpClient) { }



getData() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxODcxM2U0LTM3MGEtNDk2YS05ZGZiLWJjNTBlNTdkZDZlMSIsImV4cCI6MTY5MDE5NTQyNH0.2Xx0_NbgqDk7YgAzIX4KayEK6VvSw33yh3WYU98Fn7Q')
    return this.http.get(`${this.apiUrl}/usecases/`, { headers });
  }

}
