import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class UsecaseService {
private apiUrl = 'http://localhost:8000/api/v1'; // Replace with your API URL
constructor(private http: HttpClient) { }



getData() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxODcxM2U0LTM3MGEtNDk2YS05ZGZiLWJjNTBlNTdkZDZlMSIsImV4cCI6MTY5MDQzNzg2MX0.KctrZkwAUur4U2T9vqx9m5dVmglnppoXx8CRyCB9ZXI')
    return this.http.get(`${this.apiUrl}/usecases/`, { headers });
  }

}
