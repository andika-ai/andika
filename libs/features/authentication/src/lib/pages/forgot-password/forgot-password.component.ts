import { AuthService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
