import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { provideFunctions, getFunctions, connectFunctionsEmulator, httpsCallable } from '@angular/fire/functions'; 

@Injectable()
export class OpenAIService {

headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer AIzaSyA2wXmpJ6fmM9cVHud8zrRg3uf282v9t_Q'
    });
constructor(private http: HttpClient) { }



    postCorrectGrammer(prompt: any): Observable<any> {
        // let params: URLSearchParams = new URLSearchParams();
        // let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    
        // params.set('to', 'user@example.com');
        // params.set('from', 'you@yoursupercoolapp.com');
        // params.set('subject', 'test-email');
        // params.set('content', 'Hello World');
        // this.http.post(,'test data', )
        return this.http.post('http://127.0.0.1:4401/andika-16cf6/us-central1/grammerCorrection', prompt,{ headers: this.headers });
        
    }
}





// function callCloudFunction(): Observable<string> {
//   return new Observable(observer => {
//     const options: https.RequestOptions = {
//       hostname: 'us-central1-your-project-id.cloudfunctions.net',
//       path: '/yourFunction',
//       method: 'GET'
//     };

//     const req = https.request(options, res => {
//       res.on('data', (d: string) => {
//         observer.next(d);
//         observer.complete();
//       });
//     });

//     req.on('error', (error: Error) => {
//       observer.error(error);
//     });

//     req.end();
//   });
// }


// call 

// callCloudFunction().subscribe(
//     data => console.log(data),
//     error => console.log(error)
//   );