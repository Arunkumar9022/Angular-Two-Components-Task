import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockUserData = {
    userId: 'angular1234',
    password: 'password1234',
  };

  constructor() { }
  login(userId: string, password: string): boolean {
    if (userId === this.mockUserData.userId && password === this.mockUserData.password) {
      console.log('Login successful');
      alert('Login is Successful and data is send to backend')
      return true;
    } else {
      alert("Login failed")
      console.log('Login is failed try again');
      return false;
    }
  }
}
