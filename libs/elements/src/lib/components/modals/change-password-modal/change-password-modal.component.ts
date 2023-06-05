import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'andika-app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent implements OnInit {
  form: FormGroup;
  constructor(
    public _dialogRef: MatDialogRef<ChangePasswordModalComponent>,
    private _fb: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this._fb.group({
      password: []
    })
  }


  onChangePassword(){
    const payload = this.form.value;
    
  }

  onClosClick(): void {
    this._dialogRef.close();
  }

}
