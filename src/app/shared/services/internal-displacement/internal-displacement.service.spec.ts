import { TestBed } from '@angular/core/testing';

import { InternalDisplacementService } from './internal-displacement.service';

describe('InternalDisplacementService', () => {
  let service: InternalDisplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalDisplacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
