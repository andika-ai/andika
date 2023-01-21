import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-youtube-idea-form',
  templateUrl: './youtube-idea.component.html',
  styleUrls: ['./youtube-idea.component.css']
})
export class YoutubeIdeaComponent implements OnInit {
  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      keywords: []
    });
  }

  ngOnInit() {
  }

}
