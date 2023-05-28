import { IUseCase, UseCase } from '@andika/model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, delay, tap, filter, map, takeUntil } from 'rxjs/operators';
import { UsecaseService } from '../services/usecase.service';
import { FormService } from '@andika/libs/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'andika-app-search-ai-tool',
  templateUrl: './search-ai-tool.component.html',
  styleUrls: ['./search-ai-tool.component.css']
})
export class SearchAiToolComponent implements OnInit, OnDestroy {
  /** list of usecases */
  protected usecases: IUseCase[];

  /** control for the selected usecase for server side filtering */
  public usecaseCtrl: FormControl = new FormControl();

  /** control for filter for server side. */
  public usecaseFilteringCtrl: FormControl = new FormControl();

  /** indicate search operation is in progress */
  public searching = false;

  /** list of usecases  filtered after simulating server side search */
  public filteredUsecases$: ReplaySubject<IUseCase[]> = new ReplaySubject<IUseCase[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(
    private _usecaseService: UsecaseService,
    private _formService: FormService,
    private _router: Router) {}

  ngOnInit() {
    this.getData();
    this.subscribeToFiltering();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  subscribeToFiltering() {
    this.usecaseFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => (this.searching = true)),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          if (!this.usecases) {
            return [];
          }
          // simulate server fetching and filtering data
          return this.usecases.filter((usecase: IUseCase) =>
          usecase.title && usecase.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
        
        }),
        delay(500)
      )
      .subscribe({
        next: (res) => {
          this.searching = false;
          this.filteredUsecases$.next(res);
        },
        error: (error) => {
          this.searching = false;
          // Handle error...
        }
      });
  }

  getData() {
    this.searching = true;
    this._usecaseService.getData().subscribe(
      (usecases: any) => {
        this.usecases = usecases;
        console.log(usecases)
        this.searching = false;
      },
      (error) => {
        this.searching = false;
        // Handle error...
      }
    );
  }

  /**Navigate to form based on usecase searched */
  navigateToForm(formType: UseCase) {
    this._formService.setFormType(formType);
    this._router.navigate(['/editor']);
  }
}
