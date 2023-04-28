import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-reply-to-reviews-or-email-form',
  templateUrl: './reply-to-reviews-or-email.component.html',
  styleUrls: ['./reply-to-reviews-or-email.component.css']
})
export class ReplyToReviewsOrEmailComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}