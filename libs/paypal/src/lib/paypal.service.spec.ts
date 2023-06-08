/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaypalService } from './paypal.service';

describe('Service: Paypal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaypalService]
    });
  });

  it('should ...', inject([PaypalService], (service: PaypalService) => {
    expect(service).toBeTruthy();
  }));
});
