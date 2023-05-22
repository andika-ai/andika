import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '@andika/libs/utilities';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faGoogle,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'andika-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faCoffee = faCoffee;
  form!: FormGroup;
  email: string;
  constructor(
    private _fb: FormBuilder,
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._initializeForm();
  }

  async ngOnInit() {
    // Check if the email link is a sign-in with email link
    if (await this.afAuth.isSignInWithEmailLink(window.location.href)) {
      // Get the saved email from local storage
      const email = window.localStorage.getItem('emailForSignIn');

      if (!email) {
        // Redirect to error page or show an error message if the email is not available
        this.router.navigate(['error']);
        return;
      }

      try {
        // Sign in with the email link
        const result = await this.afAuth.signInWithEmailLink(
          email,
          window.location.href
        );

        // Clear email from storage
        window.localStorage.removeItem('emailForSignIn');

        // Retrieve user details from result.user
        const user = result.user;
        // Access user properties like user.displayName, user.email, etc.

        // Redirect to desired page
        this.router.navigate(['dashboard']);
      } catch (error) {
        // Handle the error appropriately
        console.error(error);
        // Redirect to error page or show an error message
        this.router.navigate(['error']);
      }
    } else {
      // Redirect to error page or show an error message if the link is not a valid sign-in with email link
      this.router.navigate(['error']);
    }
  }

  // Other methods and properties for regular email/password sign-in
  // ...

  private _initializeForm() {
    this.form = this._fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    return this.form;
  }

  login() {
    this.authService.signIn(this.form.value.email, this.form.value.password);
  }
}
