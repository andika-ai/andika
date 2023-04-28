import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-youtube-video-description-form',
  templateUrl: './youtube-video-description.component.html',
  styleUrls: ['./youtube-video-description.component.css']
})
export class YoutubeVideoDescriptionComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}