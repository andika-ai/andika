import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-reply-to-reviews-or-email-form',
  templateUrl: './reply-to-reviews-or-email.component.html',
  styleUrls: ['./reply-to-reviews-or-email.component.css']
})
export class ReplyToReviewsOrEmailComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      message: []
    });
  }

  ngOnInit() {
  }

}