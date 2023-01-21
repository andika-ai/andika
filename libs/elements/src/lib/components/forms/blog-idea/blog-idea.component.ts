import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-blog-idea-form',
  templateUrl: './blog-idea.component.html',
  styleUrls: ['./blog-idea.component.css']
})
export class BlogIdeaComponent implements OnInit {


  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      blogIdea: []
    });
  }

  ngOnInit() {
  }

}