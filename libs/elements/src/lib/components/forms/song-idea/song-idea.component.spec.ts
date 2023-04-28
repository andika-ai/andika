/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SongIdeaComponent } from './song-idea.component';

describe('SongIdeaComponent', () => {
  let component: SongIdeaComponent;
  let fixture: ComponentFixture<SongIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
