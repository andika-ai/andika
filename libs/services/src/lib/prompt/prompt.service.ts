import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class PromptService {

private apiUrl = 'http://localhost:8000/api/v1'; // Replace with your API URL
private rapidApiHost = 'RAPID_API_HOST'; // Replace with your RapidAPI host
private rapidApiKey = 'RAPID_API_KEY'; // Replace with your RapidAPI key
constructor(private http: HttpClient) { }



postPrompt(payload: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE3MzdmY2I3LTJjYWItNDI1YS05N2M5LTUxNjYyYzg1MTUxZiIsImV4cCI6MTY4OTQ0OTI5NH0.8UUfFNwpkyMjGv4b59q5bdIak9VAOnjmQo39cLBaOF4')
    .set('X-RapidAPI-Host', this.rapidApiHost)
    .set('X-RapidAPI-Key', this.rapidApiKey);

    return this.http.post(`${this.apiUrl}/prompt/completion/`, {payload: payload}, { headers });
  }

}


