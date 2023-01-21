import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-testimonial-and-review-form',
  templateUrl: './testimonial-and-review.component.html',
  styleUrls: ['./testimonial-and-review.component.css']
})
export class TestimonialAndReviewComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      productOrServiceName: [],
      reviewTitle: []
    });
  }

  ngOnInit() {
  }

}
