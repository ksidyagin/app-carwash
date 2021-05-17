import { TestBed } from '@angular/core/testing';

import { ReceiptInvoiceService } from './receipt-invoice.service';

describe('ReceiptInvoiceService', () => {
  let service: ReceiptInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
