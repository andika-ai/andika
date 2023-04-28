import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-profile-bio-form',
  templateUrl: './profile-bio.component.html',
  styleUrls: ['./profile-bio.component.css']
})
export class ProfileBioComponent implements OnInit {

  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}
