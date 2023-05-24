import { Injectable, NgZone } from '@angular/core';
import { User } from '@andika/model';
import * as auth from 'firebase/auth';

import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

import { BackendUserService } from '@andika/services';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data


  private _subs = new SubSink();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private _backendUserService: BackendUserService,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    /* Saving user data in localstorage when  logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user: any) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  /**
   * Returns true when the user is logged in and their email is verified.
   * @returns A boolean value indicating the login and email verification status.
   */
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.is_verified !== false;
  }


  /**
   * Sign in with email and password.
   * @param email - The email address of the user.
   * @param password - The password of the user.
   * @returns An Observable that represents the sign-in process.
   */
  signIn(email: string, password: string): Observable<any> {
    return from(this._backendUserService.userEmailLogin({ email, password }));
  }
  /**
   * Sign up with email and password when the user is registering.
   * @param email - The email address of the user.
   * @param password - The password of the user.
   * @param pricing_plan - The pricing plan chosen by the user.
   * @returns An Observable that represents the sign-up process.
   */
  signUp(email: string, password: string, pricing_plan: string): Observable<any> {
    // We don't want to create a user in Firebase, so this should be scrapped
    const payload = {
      email: email,
      password: password,
      pricing_plan: pricing_plan
    };
    return from(
      this._backendUserService.userEmailRegister(payload)
    );
  }

  /**
   * Sends a password reset email for the provided email address.
   * @param passwordResetEmail - The email address for which to send the password reset email.
   * @returns A Promise that represents the password reset email sending process.
   */
  forgotPassword(passwordResetEmail: string): Promise<void> {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }


  /**
   * Signs in with Google using Firebase authentication.
   * @returns A Promise that represents the sign-in process.
   */
  googleAuth(): Promise<void> {
    return this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {
        this.afAuth.currentUser.then((res: any) => {
          const token = JSON.parse(JSON.stringify(res))?.stsTokenManager
            .accessToken;
          const email = JSON.parse(JSON.stringify(res))?.email;
          console.log(token);
          console.log(email);
          const userData = {
            pricing_plan: 'BASIC',
            auth_token: token,
          };

          this.setUserData(userData);
        });
      })
      .catch((error: any) => {
        alert(error.message);
      });
  }


  /**
   * Signs in with Facebook using Firebase authentication.
   * @returns A Promise that represents the sign-in process.
   */
  facebookAuth(): Promise<any> {
    // Create a new instance of the FacebookAuthProvider
    const provider = new auth.FacebookAuthProvider();
    // Sign in with Facebook using a popup window
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        // The user has been successfully authenticated with Facebook
        // You can access the user's information through the `result` object
        const user = result.user;
        const token = JSON.parse(JSON.stringify(user))?.stsTokenManager
          .accessToken;
        const userData = {
          pricing_plan: 'BASIC',
          auth_token: token,
        };
        // Set user data
        return this._backendUserService.saveNewSocialUser(userData);
      })
      .catch((error: any) => {
        // An error occurred during the Facebook authentication process
        console.error('Facebook authentication error:', error);
      });
  }




  // Sign in with twitter
  // twitterAuth() {
  //   const provider = new auth.TwitterAuthProvider();
  //   // Sign in with Twitter using a popup window
  //   return this.afAuth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       // The user has been successfully authenticated with Facebook
  //       // You can access the user's information through the `result` object
  //       const user = result.user;
  //       const token = JSON.parse(JSON.stringify(user))?.stsTokenManager
  //         .accessToken;
  //       // console.log("Authenticated user:", user);
  //       const userData = {
  //         pricing_plan: 'BASIC',
  //         auth_token: token,
  //       };
  //       // ///set user data
  //       this.setUserData(userData);
  //       // Perform any additional actions or navigate to a new page if needed
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // An error occurred during the Facebook authentication process
  //       console.error('Facebook authentication error:', error);
  //     });
  // }

  /**
   * Saves user data to the server database.
   * @param userData - The user data to be saved.
   */
  setUserData(userData: any): void {
    const sub: Subscription = this._backendUserService.saveNewSocialUser(userData).subscribe({
      next: (response: any) => {
        console.log(response);
        this._subs.add(sub);
        // Perform any additional actions or logic based on the response
      },
      error: (error: any) => {
        console.error(error);
        window.alert(error.message);
        // Display error messages or perform error-specific actions
      },
      complete: () => {
        // Code to execute after the subscription is complete
        this.router.navigate(['dashboard']);
      },
    });
  }
  /**
   * Signs out the currently authenticated user.
   * @returns A Promise that represents the sign-out process.
   */
  signOut(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  /**
   * Unsubscribes from all subscriptions.
   */
  public unsubscribeAll(): void {
    this._subs.unsubscribe();
  }

}
