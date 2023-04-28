/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GptPromptComponent } from './gpt-prompt.component';

describe('GptPromptComponent', () => {
  let component: GptPromptComponent;
  let fixture: ComponentFixture<GptPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GptPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GptPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
