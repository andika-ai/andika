import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { SubSink } from 'subsink';

import { User } from '@andika/model';
import { AuthService } from '@andika/libs/utilities';
import { SnackBarService } from '@andika/elements';


@Component({
  selector: 'andika-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  email: string;
  submitting = false;
  _subs = new SubSink();
  successMsg =  'Congratulations! You have successfully registered.'
  constructor(
    private _fb: FormBuilder,
    public authService: AuthService,
    private _router: Router,
    private _snackBarService: SnackBarService,
  ) {}

  ngOnInit() {
    this._initializeForm()
  }

  /**Initialize register form */
  _initializeForm() {
    this.form = this._fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  /**
   * Submits the form data and performs the necessary actions upon completion.
   */
  submitForm(): void {
    if (this.form.valid) {
      this.submitting = true; // Set the submitting flag to true

      // Perform the form submission or API call
      const signUpSubscription = this.authService
        .signUp(this.form.value.email, this.form.value.password, 'BASIC')
        .subscribe({
          next: (res: User) => {
            this.submitting = false;

            this._snackBarService.openSnackBar('Success!',` ${this.successMsg}`,'OK', 'center', 'top', ['snackbar-success']);

            window.localStorage.setItem('user', JSON.stringify(res));

            this._subs.add(signUpSubscription);

            // this._redirectToDashboard();
          },
          error: (msg: any) => {
            const errorMsg = msg.error.data['error'];
            const errorMessage = "An error occurred. Additional information: " + errorMsg;
            this._snackBarService.openSnackBar(errorMessage, '', 'OK', 'center', 'top', ['snackbar-error']);
          },
          complete: () => {
            // This callback is triggered when the API call is complete
            // regardless of success or failure
            this.submitting = false; // Set the submitting flag back to false
            
          },
        });
    }
  }

  /**
   * Redirects the user to the dashboard page.
   */
  private _redirectToDashboard(): void {
    this._router.navigate(['dashboard']);
  }

  /**Unsubscribe on destroy component */
  ngOnDestroy() {
    this.authService.unsubscribeAll();
    this._subs.unsubscribe();
  }
}
