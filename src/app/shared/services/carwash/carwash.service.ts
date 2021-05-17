import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carwash } from '../../models/carwash.model';
import { AuthentificationService } from '../authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CarwashService {

  constructor(private http: HttpClient, private authService: AuthentificationService) { }

  findOne(id: number): Observable<Carwash> {
    return this.http.get<Carwash>('/api/carwashes/' + id);
  }

  find(): Observable<Carwash[]> {

    return this.http.get<Carwash[]>('/api/carwashes');
  }

  post(carwash: Carwash): Observable<Carwash> {
    return this.http.post<Carwash>('/api/carwashes', carwash);
  }

  deleteOne(id: number): Observable<Carwash> {
    return this.http.delete<Carwash>('/api/carwashes/' + id);
  }
 
}
