import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'andika-app-change-email-modal',
  templateUrl: './change-email-modal.component.html',
  styleUrls: ['./change-email-modal.component.css']
})
export class ChangeEmailModalComponent implements OnInit {
  form: FormGroup;
  constructor(
    public _dialogRef: MatDialogRef<ChangeEmailModalComponent>,
    private _fb: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this._fb.group({
      email: []
    })
  }

  onUpdateEmail(){
    const payload = this.form.value;

  }

  
  onCloseClick(): void {
    this._dialogRef.close();
  }

}