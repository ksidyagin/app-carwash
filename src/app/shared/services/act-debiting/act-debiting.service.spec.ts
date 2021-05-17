import { TestBed } from '@angular/core/testing';

import { ActDebitingService } from './act-debiting.service';

describe('ActDebitingService', () => {
  let service: ActDebitingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActDebitingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
