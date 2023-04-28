import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'andika-song-idea-form',
  templateUrl: './song-idea.component.html',
  styleUrls: ['./song-idea.component.css']
})
export class SongIdeaComponent implements OnInit {

  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}
