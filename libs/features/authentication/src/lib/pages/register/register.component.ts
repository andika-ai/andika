import { AuthService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'andika-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  constructor(private _fb: FormBuilder, public authService: AuthService) { 
    this._initializeForm();
  }


  ngOnInit() {
    
  }

  _initializeForm() {
    // this.form = this._fb.group({
    //   email: new FormControl(null, Validators.required),
    //   password: new FormControl(null, Validators.required),
    // });
    // google auth token
    // this.authService.getToken()
  }
}
