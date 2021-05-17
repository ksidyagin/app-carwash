import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptInvoiceComponent } from './receipt-invoice.component';

describe('ReceiptInvoiceComponent', () => {
  let component: ReceiptInvoiceComponent;
  let fixture: ComponentFixture<ReceiptInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
