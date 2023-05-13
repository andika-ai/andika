import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseCase } from '@andika/model';
import { BehaviorSubject } from 'rxjs';
import {
  faTeletype,
  faTimes,
  faExpand,
  faQuestionCircle,
  faLightbulb,
  faPen,
  faPenNib,
  faClockRotateLeft,
  faPlus

} from '@fortawesome/free-solid-svg-icons';

import { FormService } from '@andika/libs/shared';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faPlus = faPlus;
  usecase = UseCase;

  
  constructor(private router: Router, private formService: FormService) { }

  ngOnInit() {
  }

  navigateToEditor(formType: UseCase) {
    this.formService.setFormType(formType);
    this.router.navigate(['/editor']);
  }

}
