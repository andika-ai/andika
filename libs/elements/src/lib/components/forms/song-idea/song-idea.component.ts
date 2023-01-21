import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-song-idea-form',
  templateUrl: './song-idea.component.html',
  styleUrls: ['./song-idea.component.css']
})
export class SongIdeaComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      songIdea: []
    });
  }

  ngOnInit() {
  }

}