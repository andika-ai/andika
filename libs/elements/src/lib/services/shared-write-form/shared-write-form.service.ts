import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UseCase } from '../../components/write-form/usecase.enum';

@Injectable({
  providedIn: 'root'
})
export class SharedWriteFormService {

  parentForm = new FormGroup({
    language: new FormControl(''),
    tone: new FormControl(''),
    usecase: new FormControl(''),
    creativityLevel: new FormControl(''),
    numberOfVariants: new FormControl(''),
  });

  constructor(
    private _fb: FormBuilder
  ) { }





}

