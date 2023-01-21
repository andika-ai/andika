import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-job-description-form',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {


  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      jobRole: []
    });
  }

  ngOnInit() {
  }

}