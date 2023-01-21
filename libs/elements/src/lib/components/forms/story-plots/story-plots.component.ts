import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-story-plots-form',
  templateUrl: './story-plots.component.html',
  styleUrls: ['./story-plots.component.css']
})
export class StoryPlotsComponent implements OnInit {

  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      storyIdea: []
    });
  }

  ngOnInit() {
  }

}