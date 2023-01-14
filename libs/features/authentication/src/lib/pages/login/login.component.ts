import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@andika/libs/utilities';

@Component({
  selector: 'andika-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(private _fb: FormBuilder, public authService: AuthService) { 
    this._initializeForm();
  }

  ngOnInit() {
    //ng on init 
    console.log('ngOnInit')
  }

  private _initializeForm(){
      this.form = this._fb.group({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
      });
      return this.form
  }


  login(){
    this.authService.signIn(this.form.value.email, this.form.value.password);

  }
}
