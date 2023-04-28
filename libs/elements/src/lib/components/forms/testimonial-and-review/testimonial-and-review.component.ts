import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-testimonial-and-review-form',
  templateUrl: './testimonial-and-review.component.html',
  styleUrls: ['./testimonial-and-review.component.css']
})
export class TestimonialAndReviewComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}