import { Component, OnInit, OnDestroy} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService, CacheService } from '@andika/libs/utilities';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faGoogle,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { User } from '@andika/model';
import { SnackBarService } from '@andika/elements';

@Component({
  selector: 'andika-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  faCoffee = faCoffee;
  form!: FormGroup;
  email: string;
  submitting = false;
  _subs  = new SubSink();
  constructor(
    private _fb: FormBuilder,
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private _router: Router,
    private _snackBarService: SnackBarService,
    private  _cacheService: CacheService
  ) {
    
  }

  ngOnInit() {
    this._initializeForm();
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


  submitForm() {
    if (this.form.valid) {
      this.submitting = true; // Set the submitting flag to true
  
      // Perform the form submission or API call
      const sub = this.authService
        .signIn(this.form.value.email, this.form.value.password)
        .subscribe({
          next: (res: any) => {
            this._cacheService.setItem('user', res.data);
            // Handle the success scenario
            this.submitting = false; // Set the submitting flag back to false
            this._subs.add(sub);
            this._snackBarService.openSnackBar('Success!', 'Login success','OK', 'center', 'top', ['snackbar-success']);
            // Handle the result or redirect to a new page
            //set items user then redirect
            this._router.navigate(['dashboard']);
          },
          error: (res: any) => {
            this.submitting = false; 
  
            const errorMsg = res?.error?.data?.detail;
            const errorMessage = `${errorMsg}`;
            this._snackBarService.openSnackBar(errorMessage, '', 'OK', 'center', 'top', ['snackbar-error']);
          },
        });
    }
  }
  

  ngOnDestroy(){
    this.authService.unsubscribeAll(); 
    this._subs.unsubscribe();
  }




}
