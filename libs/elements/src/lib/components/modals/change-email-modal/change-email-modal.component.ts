import { SnackBarService } from '@andika/elements';
import { UserService } from '@andika/services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import {
  faCheck
  
  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-app-change-email-modal',
  templateUrl: './change-email-modal.component.html',
  styleUrls: ['./change-email-modal.component.css']
})
export class ChangeEmailModalComponent implements OnInit {
  submitting=false;
  faCheck=faCheck;
  form: FormGroup;
  constructor(
    public _dialogRef: MatDialogRef<ChangeEmailModalComponent>,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _snackBarService: SnackBarService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this._fb.group({
      current_email: [],
      new_email: []
    })
  }

  onUpdateEmail(){
    const payload = this.form.value;
    this.submitting = true;
    this._userService.userChangeEmail(payload).subscribe({
      next: (res)=>{
        this.submitting = false;
        this._snackBarService.openSnackBar('Success!','email updated','OK', 'center', 'top', ['snackbar-success']);
      },
      error: (res)=>{
        this.submitting = false;
        this._snackBarService.openSnackBar('Error!', `${res.error.data.error}`,'OK', 'center', 'top', ['snackbar-error']);
      }
    })

  }

  
  onCloseClick(): void {
    this._dialogRef.close();
  }

}