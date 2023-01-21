import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-youtube-video-description-form',
  templateUrl: './youtube-video-description.component.html',
  styleUrls: ['./youtube-video-description.component.css']
})
export class YoutubeVideoDescriptionComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      videoTitle: []
    });
  }

  ngOnInit() {
  }

}
