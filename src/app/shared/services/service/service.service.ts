import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Service> {
    return this.http.get<Service>('/api/services/' + id);
  }

  find(): Observable<Service[]> {

    return this.http.get<Service[]>('/api/services');
  }

  create(service: Service): Observable<Service> {
    return this.http.post<Service>('/api/services', service);
  }

  updateOne(service: Service) : Observable<Service> {
    return this.http.put<Service>('/api/services/'+ service.id, service);
  }  

  deleteOne(id: number): Observable<Service> {
    return this.http.delete<Service>('/api/services/' + id);
  }
}
