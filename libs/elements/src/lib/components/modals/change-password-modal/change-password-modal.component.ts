import { SnackBarService } from '@andika/elements';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserService } from '@andika/services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import {
faCheck

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent implements OnInit {
  form: FormGroup;
  submitting=false;
  faCheck = faCheck;
  constructor(
    public _dialogRef: MatDialogRef<ChangePasswordModalComponent>,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _snackBarService: SnackBarService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this._fb.group({
      current_password: [],
      new_password: []
    })
  }


  onChangePassword(){
    this.submitting=true;
    const payload = this.form.value;
    this._userService.userChangePassword(payload).subscribe({
      next: (res)=>{
        this.submitting=false;
        this._snackBarService.openSnackBar('Success!','password updated','OK', 'center', 'top', ['snackbar-success']);
      },
      error: (res)=>{
        this._snackBarService.openSnackBar('Error!','password not updated','OK', 'center', 'top', ['snackbar-error']);
        this.submitting = false;
      }
    })
    
  }

  onClosClick(): void {
    this._dialogRef.close();
  }

}
