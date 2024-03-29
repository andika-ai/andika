import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-blog-idea-form',
  templateUrl: './blog-idea.component.html',
  styleUrls: ['./blog-idea.component.css']
})
export class BlogIdeaComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;
  characterCount = 0;
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }


  updateCharacterCount(event: any) {
    const value = event.target.value;
    this.characterCount = value.length;
  }

}

