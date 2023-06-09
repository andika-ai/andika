import { SnackBarService } from '@andika/elements';
import { Draft } from '@andika/model';
import { DocumentService } from '@andika/services';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
  faCheck,

  
  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-app-save-document-modal',
  templateUrl: './save-document-modal.component.html',
  styleUrls: ['./save-document-modal.component.css']
})
export class SaveDocumentModalComponent {
  documentForm: FormGroup;
  submitting=false;
  title: string;
  document: Draft;
  faCheck=faCheck;
  constructor(
    private dialogRef: MatDialogRef<SaveDocumentModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Draft, 
     private _documentService: DocumentService,
     private _snackBarService: SnackBarService,
     private formBuilder: FormBuilder) {
    this.document = this.data;
    console.log(this.data)
    this.documentForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  get formControls() {
    return this.documentForm.controls;
  }

  saveDocument(): void {
    if (this.documentForm.invalid && (!this.document.content) && (!this.document.use_case)) {
      return;
    }
    this.submitting=true;
    // Perform any additional validation or processing here
    // For simplicity, we'll just close the modal and pass the form values back

    this.document.title = this.documentForm.get('title')?.value;


    this._documentService.saveDocument(this.document).subscribe({
      next: (res)=>{
        this.submitting=false;
        this._snackBarService.openSnackBar('Success!','document saved','OK', 'center', 'top', ['snackbar-success']);

        this.dialogRef.close();
      },
      error: (res)=>{
        this._snackBarService.openSnackBar('Error!','document not saved','OK', 'center', 'top', ['snackbar-error']);
        this.submitting = false;
      }
    })

    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
