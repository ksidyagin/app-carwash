import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>('/api/warehouses/' + id);
  }

  find(): Observable<Warehouse[]> {

    return this.http.get<Warehouse[]>('/api/warehouses');
  }

  create(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>('/api/warehouses', warehouse);
  }

  updateOne(warehouse: Warehouse) : Observable<Warehouse> {
    return this.http.put<Warehouse>('/api/warehouses/'+ warehouse.id, warehouse);
  }  

  deleteOne(id: number): Observable<Warehouse> {
    return this.http.delete<Warehouse>('/api/warehouses/' + id);
  }

}
