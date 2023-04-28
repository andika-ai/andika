/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoryPlotsComponent } from './story-plots.component';

describe('StoryPlotsComponent', () => {
  let component: StoryPlotsComponent;
  let fixture: ComponentFixture<StoryPlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
