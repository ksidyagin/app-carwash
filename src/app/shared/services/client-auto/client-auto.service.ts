import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientAuto } from '../../models/client-auto.model';

@Injectable({
  providedIn: 'root'
})
export class ClientAutoService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<ClientAuto> {
    return this.http.get<ClientAuto>('/api/clients-cars/' + id);
  }

  find(): Observable<ClientAuto[]> {

    return this.http.get<ClientAuto[]>('/api/clients-cars');
  }

  create(clientAuto: ClientAuto): Observable<ClientAuto> {
    return this.http.post<ClientAuto>('/api/clients-cars', clientAuto);
  }

  updateOne(clientAuto: ClientAuto) : Observable<ClientAuto> {
    return this.http.put<ClientAuto>('/api/clients-cars/'+ clientAuto.id, clientAuto);
  }  
}
