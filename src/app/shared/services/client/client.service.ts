import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Client> {
    return this.http.get<Client>('/api/clients/' + id);
  }

  find(): Observable<Client[]> {

    return this.http.get<Client[]>('/api/clients');
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>('/api/clients', client);
  }

  updateOne(client: Client) : Observable<Client> {
    return this.http.put<Client>('/api/clients/'+ client.id, client);
  }

  deleteOne(id: number): Observable<Client> {
    return this.http.delete<Client>('/api/clients/' + id);
  }
}
