import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<User> {
    return this.http.get<User>('/api/users/' + id);
  }

  find(): Observable<User[]> {

    return this.http.get<User[]>('/api/users');
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  updateOne(user: User) : Observable<User> {
    return this.http.put<User>('/api/users/'+ user.id, user);
  }  

  deleteOne(id: number): Observable<User> {
    return this.http.delete<User>('/api/users/' + id);
  }

  findUserByEmail(email: string): Observable<User> {
    return this.http.get<User>('/api/users/findEmail/' + email);
  }
}
