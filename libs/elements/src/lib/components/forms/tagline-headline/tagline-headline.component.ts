import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-tagline-headline-form',
  templateUrl: './tagline-headline.component.html',
  styleUrls: ['./tagline-headline.component.css']
})
export class TaglineHeadlineComponent implements OnInit {
  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      keyPoints: []
    });
  }

  ngOnInit() {
  }

}
