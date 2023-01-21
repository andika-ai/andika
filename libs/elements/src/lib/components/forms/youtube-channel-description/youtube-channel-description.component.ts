import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-youtube-channel-description-form',
  templateUrl: './youtube-channel-description.component.html',
  styleUrls: ['./youtube-channel-description.component.css']
})
export class YoutubeChannelDescriptionComponent implements OnInit {

  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}