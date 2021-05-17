import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Product> {
    return this.http.get<Product>('/api/products/' + id);
  }

  find(): Observable<Product[]> {

    return this.http.get<Product[]>('/api/products');
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>('/api/products', product);
  }

  updateOne(product: Product) : Observable<Product> {
    return this.http.put<Product>('/api/products/'+ product.id, product);
  }  
  
  deleteOne(id: number): Observable<Product> {
    return this.http.delete<Product>('/api/products/' + id);
  }
}
