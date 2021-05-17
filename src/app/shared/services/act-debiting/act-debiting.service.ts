import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActOfDebiting } from '../../models/act-of-debiting.model';

@Injectable({
  providedIn: 'root'
})
export class ActDebitingService {
  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<ActOfDebiting> {
    return this.http.get<ActOfDebiting>('/api/act-of-debiting/' + id);
  }

  find(): Observable<ActOfDebiting[]> {

    return this.http.get<ActOfDebiting[]>('/api/act-of-debiting');
  }

  create(act: ActOfDebiting): Observable<ActOfDebiting> {
    return this.http.post<ActOfDebiting>('/api/act-of-debiting', act);
  }

  updateOne(act: ActOfDebiting) : Observable<ActOfDebiting> {
    return this.http.put<ActOfDebiting>('/api/act-of-debiting/'+ act.id, act);
  }
  
  deleteOne(id: number): Observable<ActOfDebiting> {
    return this.http.delete<ActOfDebiting>('/api/act-of-debiting/' + id);
  }

}
