import { AuthService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  sendVerificationMail(){
    console.log('')
  }

}
