import { ChangeEmailModalComponent, ChangePasswordModalComponent, SnackBarService } from '@andika/elements';
import { CacheService } from '@andika/libs/utilities';
import { EnvironmentProvider } from '@andika/config';
import { User } from '@andika/model';
import { UserService } from '@andika/services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'andika-app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateProfileSubmitting = false;
  form: FormGroup;
  user: User;
  email: string;
  loading = true;
  activeUser$ = this._userService.activeUser;
  constructor(
    public _dialog: MatDialog,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _cacheService: CacheService,
    private _environmentProvider: EnvironmentProvider,
    private _snackBarService: SnackBarService
    ) {
    
      this.activeUser$.subscribe({
        next: (res: any) => {
          this.loading=false;
          this.user = res.data as User;
          this.email = res.data.email;
          this.form.patchValue({
            name: this.user.display_name
          });
        }
      });
     }

  ngOnInit() {
    // initialize with current values
    this._initForm()
  }


  _initForm(){
    this.form = this._fb.group({
      name: []
    })
  }


  updateProfile() {
    if (this.user && this._environmentProvider.environment.apiRoot) {
      this.updateProfileSubmitting = true;
      const baseUrl: string = this._environmentProvider.environment.apiRoot;
      this._userService.updateUser(this.form.value as any, baseUrl).subscribe({
        next: (res: any)=>{
          this.updateProfileSubmitting=false;
            // Patch the values to the form fields
            console.log(res)
            this.form.patchValue({
              name: res.data.display_name
            });
            this._snackBarService.openSnackBar('Success!',`${res.msg}`,'OK', 'center', 'top', ['snackbar-success']);
        },
        error: (msg)=>{
          this._snackBarService.openSnackBar('Error!',`${msg.error.data['error']}`,'OK', 'center', 'top', ['snackbar-error']);
        }
      })
      // Rest of your code
    } else {
      // Handle the case when the value is undefined
      console.error('Invalid baseUrl. Please check your environment configuration.');
    }
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
