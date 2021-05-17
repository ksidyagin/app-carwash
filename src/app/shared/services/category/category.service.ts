import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Category> {
    return this.http.get<Category>('/api/categories/' + id);
  }

  find(): Observable<Category[]> {

    return this.http.get<Category[]>('/api/categories');
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>('/api/categories', category);
  }

  updateOne(category: Category) : Observable<Category> {
    return this.http.put<Category>('/api/categories/'+ category.id, category);
  }
  
  deleteOne(id: number): Observable<Category> {
    return this.http.delete<Category>('/api/categories/' + id);
  }

}
