/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsecaseService } from '../usecase.service';

describe('Service: Usecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsecaseService]
    });
  });

  it('should ...', inject([UsecaseService], (service: UsecaseService) => {
    expect(service).toBeTruthy();
  }));
});
