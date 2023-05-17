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
import { UsecaseService } from '@andika/services';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faPlus = faPlus;
  usecase = UseCase;
  usecases: any[];
  

  filterCategory = '';
  
  constructor(
    private router: Router,
    private formService: FormService,
    private _usecaseService: UsecaseService) { }

  ngOnInit() {
    this.getUseCaseData();
  }

  get filteredUseCases() {
    if (this.filterCategory.trim() === '') {
      return this.usecases;
    } else {
      return this.usecases.filter(usecase =>
        usecase.category.toLowerCase().includes(this.filterCategory.toLowerCase())
      );
    }
  }

  getUseCaseData() {
    this._usecaseService.getData().subscribe((data: any) => {
      // Handle the API response here
      this.usecases = data;
      console.log(data);
    });
  }

  navigateToEditor(formType: UseCase) {
    this.formService.setFormType(formType);
    this.router.navigate(['/editor']);
  }

}
