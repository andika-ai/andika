import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'andika-profile-bio-form',
  templateUrl: './profile-bio.component.html',
  styleUrls: ['./profile-bio.component.css']
})
export class ProfileBioComponent implements OnInit {


  @Input() form: FormGroup
  constructor(_fb: FormBuilder) { 
    this.form = _fb.group({
      description: []
    });
  }

  ngOnInit() {
  }

}