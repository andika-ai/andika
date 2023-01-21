import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-sms-and-notifications-form',
  templateUrl: './sms-and-notifications.component.html',
  styleUrls: ['./sms-and-notifications.component.css']
})
export class SmsAndNotificationsComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      context: []
    });
  }

  ngOnInit() {
  }

}