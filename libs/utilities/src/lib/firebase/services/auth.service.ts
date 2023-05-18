
import { Injectable, NgZone } from '@angular/core';
import { User } from '@andika/model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import {GoogleUserProfile} from '@andika/model';
import {BackendUserService} from  '@andika/services'
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  googleCurrentUser: any;
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


  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['editor']);
          }
        });
      })
      .catch((error) => {
        // window.alert(error.message);
        window.alert('Try Log In with Google button Instead')
      });
  }
  // Sign up with email/password
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
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
googleAuth() {
  return this.authLogin(new auth.GoogleAuthProvider())
    .then((res: any) => {
      this.afAuth.currentUser.then((res: any)=>{
            const token = JSON.parse(JSON.stringify(res))?.stsTokenManager.accessToken;
            const email = JSON.parse(JSON.stringify(res))?.email;
      
            const userData = {
              email: email,
              auth_token: token
            };

            this._backendUserService.saveUserData(userData).subscribe({
              next: (response) => {
                console.log(response);
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
              }
            });
      });
    })
    .catch(err => {
      alert(err.message);
    });
}

  // Sign in with Facebook
  facebookAuth() {
    return this.authLogin(new auth.FacebookAuthProvider()).then((res: any) => {
      this.router.navigate(['editor']);
    }, err=>{
      alert(err.message)
    });
  }

  // Sign in with twitter
  twitterAuth() {
    return this.authLogin(new auth.TwitterAuthProvider()).then((res: any) => {
      this.router.navigate(['editor']);
    }, err=>{
      alert(err.message)
    });
  }
  // Auth logic to run auth providers
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['editor']);
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* 
  @description: Dave the use to the database in the server
  Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user: any) {

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

}