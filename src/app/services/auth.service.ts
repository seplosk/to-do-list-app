import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';
  private loggedInUserKey = 'loggedInUser';

  constructor() { }

  register(username: string, email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    if (users.some((user: any) => user.email === email)) {
      return false; // Email already registered
    }
    users.push({ username, email, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.loggedInUserKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.loggedInUserKey) !== null;
  }
}
