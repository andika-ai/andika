import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-sms-and-notifications-form',
  templateUrl: './sms-and-notifications.component.html',
  styleUrls: ['./sms-and-notifications.component.css']
})
export class SmsAndNotificationsComponent implements OnInit {

  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}