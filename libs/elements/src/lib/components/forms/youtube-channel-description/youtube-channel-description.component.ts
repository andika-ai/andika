import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-youtube-channel-description-form',
  templateUrl: './youtube-channel-description.component.html',
  styleUrls: ['./youtube-channel-description.component.css']
})
export class YoutubeChannelDescriptionComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      channelDescription: []
    });
  }

  ngOnInit() {
  }

}
