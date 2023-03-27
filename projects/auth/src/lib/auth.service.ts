import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '@@models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<User | undefined>(void 0);

  public get user() {
    return this._user.value;
  }

  public get isLogged() {
    return this.user != null;
  }

  constructor() {
    try {
      const user = JSON.parse(String(localStorage.getItem('user')));
      if (user) {
        this._user.next(user);
      }
    } catch {}
  }

  public login(user: User) {
    this._user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public logout() {
    this._user.next(void 0);
    localStorage.removeItem('user');
  }
}
