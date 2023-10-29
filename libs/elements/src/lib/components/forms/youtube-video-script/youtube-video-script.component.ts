import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-youtube-video-script',
  templateUrl: './youtube-video-script.component.html',
  styleUrls: ['./youtube-video-script.component.css']
})
export class YoutubeVideoScriptComponent implements OnInit {

  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}



