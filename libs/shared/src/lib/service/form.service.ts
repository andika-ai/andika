import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UseCase } from '@andika/model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  characterCount=0;
  private formTypeSubject = new BehaviorSubject<UseCase>(UseCase.BlogIdeaAndOutline);
  public formType$ = this.formTypeSubject.asObservable();

  setFormType(formType: UseCase) {
    this.formTypeSubject.next(formType);
  }

}
