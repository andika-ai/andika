import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-grammer-correction-form',
  templateUrl: './grammer-correction.component.html',
  styleUrls: ['./grammer-correction.component.css']
})
export class GrammerCorrectionComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}
