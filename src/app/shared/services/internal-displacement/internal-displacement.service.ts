import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternalDisplacement } from '../../models/internal-displacement.model';

@Injectable({
  providedIn: 'root'
})
export class InternalDisplacementService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<InternalDisplacement> {
    return this.http.get<InternalDisplacement>('/api/internal-displacement/' + id);
  }

  find(): Observable<InternalDisplacement[]> {

    return this.http.get<InternalDisplacement[]>('/api/internal-displacement');
  }

  create(displacement: InternalDisplacement): Observable<InternalDisplacement> {
    return this.http.post<InternalDisplacement>('/api/internal-displacement', displacement);
  }

  updateOne(displacement: InternalDisplacement) : Observable<InternalDisplacement> {
    return this.http.put<InternalDisplacement>('/api/internal-displacement/'+ displacement.id, displacement);
  }
  
  deleteOne(id: number): Observable<InternalDisplacement> {
    return this.http.delete<InternalDisplacement>('/api/internal-displacement/' + id);
  }

}
