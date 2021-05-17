import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceiptInvoice } from '../../models/receipt-invoice.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptInvoiceService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<ReceiptInvoice> {
    return this.http.get<ReceiptInvoice>('/api/receipt-invoice/' + id);
  }

  find(): Observable<ReceiptInvoice[]> {

    return this.http.get<ReceiptInvoice[]>('/api/receipt-invoice');
  }

  create(displacement: ReceiptInvoice): Observable<ReceiptInvoice> {
    return this.http.post<ReceiptInvoice>('/api/receipt-invoice', displacement);
  }

  updateOne(displacement: ReceiptInvoice) : Observable<ReceiptInvoice> {
    return this.http.put<ReceiptInvoice>('/api/receipt-invoice/'+ displacement.id, displacement);
  }
  
  deleteOne(id: number): Observable<ReceiptInvoice> {
    return this.http.delete<ReceiptInvoice>('/api/receipt-invoice/' + id);
  }

}
