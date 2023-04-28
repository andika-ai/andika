import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-cover-letter-form',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}
