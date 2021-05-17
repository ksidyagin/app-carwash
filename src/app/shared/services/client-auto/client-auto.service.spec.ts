import { TestBed } from '@angular/core/testing';

import { ClientAutoService } from './client-auto.service';

describe('ClientAutoService', () => {
  let service: ClientAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
