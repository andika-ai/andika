import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-grammer-correction-form',
  templateUrl: './grammer-correction.component.html',
  styleUrls: ['./grammer-correction.component.css']
})
export class GrammerCorrectionComponent implements OnInit {


  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      text: []
    });
  }

  ngOnInit() {
  }

}