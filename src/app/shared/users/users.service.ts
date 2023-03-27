import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@@models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getAllUsers(): Observable<User[]> {
    const users: User[] = JSON.parse(String(localStorage.getItem('users'))) ?? [];

    return of(users);
  }

  addUser(user: User) {
    const users: User[] = JSON.parse(String(localStorage.getItem('users'))) ?? [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  deleteUser(user: User) {
    let users: User[] = JSON.parse(String(localStorage.getItem('users'))) ?? [];

    users = users.filter(({ username }) => username !== user.username);

    localStorage.setItem('users', JSON.stringify(users));
  }
}
