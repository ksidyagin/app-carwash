import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private http: HttpClient) { }

  // getNews() {
  //   return this.http.get(`http://localhost:3000/news`);
  // }
  // getSales() {
  //   return this.http.get(`http://localhost:3000/sales`);
  // }
  // getCarwashes() {
  //   return this.http.get(`http://localhost:3000/carwashes`);
  // }
  // getCarwashByID(id: number) {
  //   return this.http.get(`http://localhost:3000/carwashes?id=${id}`);
  // }
  // getPolish() {
  //   return this.http.get(`http://localhost:3000/polish`);
  // }
  // getLaundry() {
  //   return this.http.get(`http://localhost:3000/laundry`);
  // }
}
