import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Order> {
    return this.http.get<Order>('/api/orders/' + id);
  }

  find(): Observable<Order[]> {

    return this.http.get<Order[]>('/api/orders');
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order);
  }

  updateOne(order: Order) : Observable<Order> {
    return this.http.put<Order>('/api/orders/'+ order.id, order);
  }

  deleteOne(id: number): Observable<Order> {
    return this.http.delete<Order>('/api/orders/' + id);
  }
}
