import { Injectable, NgZone } from '@angular/core';
import { User } from '@andika/model';
import * as auth from 'firebase/auth';

import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

import { BackendUserService } from '@andika/services';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  googleCurrentUser: any;

  private _subs = new SubSink();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private _backendUserService: BackendUserService,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  getToken() {
    // this.afAuth.idToken.subscribe(tk=>{
    //   console.log(tk)
    // })

    // Create a new instance of the FacebookAuthProvider
    const provider = new auth.FacebookAuthProvider();
    // Sign in with Facebook using a popup window
    this.afAuth.signInWithPopup(provider).then((result) => {
      // The user has been successfully authenticated with Facebook
      // You can access the user's information through the `result` object
      const user = result.user;
      console.log('Authenticated user:', user);
    });
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    return from(this._backendUserService.userEmailLogin({ email, password }));
  }
  // Sign up with email/password when user is registering
  signUp(email: string, password: string) {
    // we dont want to createuser in firebase so this should be scrapped
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        // Call the sendVerificationMail() function when a new user signs up and returns a promise
        this.sendVerificationMail();

        // Save user data to your server or make API requests
        // const userData = {
        //   email: result.user.email,
        //   userId: result.user.uid,
        //   // Include any additional user data you want to save
        //   auth_token: result.user.getIdToken() // Include the authentication token as part of the user data
        // };

        // Make an API request to save user data

        // this._backendUserService.saveUserData(userData).subscribe({
        //   next: (response) => {
        //     // Handle the response from the API call
        //     console.log(response);
        //     // Perform any additional actions or logic based on the response
        //   },
        //   error: (error) => {
        //     // Handle errors that occurred during the API call
        //     console.error(error);
        //     window.alert(error.message);
        //     // Display error messages or perform error-specific actions
        //   }
        // });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.is_verified !== false ? true : false;
  }
  // Sign in with Google
  googleAuth() {
    return this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((res: any) => {
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
      .catch((err) => {
        alert(err.message);
      });
  }

  // Sign in with Facebook
  facebookAuth() {
    // Create a new instance of the FacebookAuthProvider
    const provider = new auth.FacebookAuthProvider();
    // Sign in with Facebook using a popup window
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        // The user has been successfully authenticated with Facebook
        // You can access the user's information through the `result` object
        const user = result.user;
        const token = JSON.parse(JSON.stringify(user))?.stsTokenManager
          .accessToken;
        // console.log("Authenticated user:", user);
        const userData = {
          pricing_plan: 'BASIC',
          auth_token: token,
        };
        // ///set user data
        return this._backendUserService.saveNewSocialUser(userData);
      })
      .catch((error) => {
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

  /* @description: Dave the use to the database in the server*/
  setUserData(userData: any) {
    const sub = this._backendUserService.saveNewSocialUser(userData).subscribe({
      next: (response) => {
        console.log(response);
        this._subs.add(sub);
        // Perform any additional actions or logic based on the response
      },
      error: (error) => {
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
   *
   * @description signout the user
   */
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  // Call this method to unsubscribe from all subscriptions
  public unsubscribeAll() {
    this._subs.unsubscribe();
  }
}
