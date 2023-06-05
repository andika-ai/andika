import { ChangeEmailModalComponent, ChangePasswordModalComponent } from '@andika/elements';
import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'andika-app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateProfileSubmitting = false;
  changePasswordSubmitting = false;
  changeEmailSubmitting = false;
  constructor(public _dialog: MatDialog) { }

  ngOnInit() {
  }



  updateProfile(){
    this.updateProfileSubmitting =true;
    console.log('')
  }

  openChangeEmailDialog(){
    this._dialog.open(ChangeEmailModalComponent, {
    });

  }

  openChangePasswordDialog(){
    this._dialog.open(ChangePasswordModalComponent, {
    });
  }

}
