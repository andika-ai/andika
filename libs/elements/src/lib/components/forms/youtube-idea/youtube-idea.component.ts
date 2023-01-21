import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { SharedWriteFormService } from '../../../services/shared-write-form/shared-write-form.service';

@Component({
  selector: 'andika-youtube-idea-form',
  templateUrl: './youtube-idea.component.html',
  styleUrls: ['./youtube-idea.component.css']
})
export class YoutubeIdeaComponent implements OnInit {
  @Input() formGroupName!: string
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}