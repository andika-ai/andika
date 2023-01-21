/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReplyToReviewsOrEmailComponent } from './reply-to-reviews-or-email.component';

describe('ReplyToReviewsOrEmailComponent', () => {
  let component: ReplyToReviewsOrEmailComponent;
  let fixture: ComponentFixture<ReplyToReviewsOrEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyToReviewsOrEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyToReviewsOrEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
