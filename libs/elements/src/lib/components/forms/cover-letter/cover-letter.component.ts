import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-cover-letter-form',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      jobRole: [],
      skills: []
    });
  }

  ngOnInit() {
  }

}