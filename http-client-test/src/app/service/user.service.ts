import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.jsonUrl}/${id}`);
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.jsonUrl, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.jsonUrl}/${user.id}`, user);
  }

  remove(id: number): Observable<User> {
    return this.http.delete<User>(`${this.jsonUrl}/${id}`);
  }

  // getUser(id: number, list: User[]): User {
  //   return list.filter(user => user.id == id)[0] || new User();
  // }

  // collect(users: User[], key: string): Observable<string[]> {
  //   let collectedArray: string[] = [];
  //   for (let i = 0; i < users.length; i++) {
  //     if (users[i].hasOwnProperty('key')) {
  //       if (collectedArray.toString().indexOf(users[i][key]) == -1) {
  //         collectedArray.push(users[i][key]);
  //       }
  //     }
  //   }

  //   return collectedArray;
  // }

}
