import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UseCase } from '@andika/model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  faTeletype,
  faTimes,
  faExpand,
  faQuestionCircle,
  faLightbulb,
  faPen,
  faPenNib,
  faClockRotateLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { FormService } from '@andika/libs/shared';
import { UsecaseService } from '@andika/services';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // Create a Subject to manage the subscription lifecycle
  private unsubscribe$: Subject<void> = new Subject<void>();

  faPlus = faPlus;
  usecase = UseCase;
  usecases: any[];
  useCaseData: any[]; // default all data loaded incases filtering happens get all usecases fron this.

  filterCategory = '';

  constructor(
    private router: Router,
    private formService: FormService,
    private _usecaseService: UsecaseService
  ) {}

  ngOnInit() {
    this.getUseCaseData();
  }

  // Call this method to fetch the initial data and subscribe to updates
  getUseCaseData() {
    this._usecaseService
      .getData()
      .pipe(takeUntil(this.unsubscribe$)) // Unsubscribe when the component is destroyed
      .subscribe((data: any) => {
        // Handle the API response here
        this.usecases = data;
        this.useCaseData = data;
      });
  }

  // Recieves filtered data that has been filtered
  receiveSearchDataFromNavbar(data: any) {
    //updatedata
    console.log(data);
    this.usecases = data;
  }

  navigateToEditor(formType: UseCase) {
    this.formService.setFormType(formType);
    this.router.navigate(['/editor']);
  }

  // Call this method when the component is about to be destroyed (e.g., in ngOnDestroy)
  unsubscribe() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
