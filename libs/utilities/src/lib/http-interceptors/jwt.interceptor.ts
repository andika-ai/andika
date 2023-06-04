import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../firebase/services/auth.service';
import { User } from '@andika/model';
import { Router } from '@angular/router';
import { excludedUrls } from './excluded-urls.ts';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService, private _router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL matches any of the excluded URLs
    const isExcluded = excludedUrls.some(url => request.url.includes(url));

    // If the request URL is excluded, bypass the interceptor
    if (isExcluded) {
      return next.handle(request);
    }

    // Get the user from the authentication service
    const user = this._authService.getUser();

    // Add the JWT token to the Authorization header if the user is available and the token exists
    if (user && user.token) {
      const token = user.token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    }

    // Forward the modified request to the next interceptor or to the backend
    return next.handle(request);
  }
}
