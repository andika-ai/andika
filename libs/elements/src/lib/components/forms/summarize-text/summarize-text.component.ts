import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-summarize-text-form',
  templateUrl: './summarize-text.component.html',
  styleUrls: ['./summarize-text.component.css']
})
export class SummarizeTextComponent implements OnInit {


  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}

