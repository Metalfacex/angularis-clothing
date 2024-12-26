import { Injectable } from '@angular/core';
import {IUsers} from '../interfaces/users-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: IUsers[] = [
    {
      id: 1,
      firstName: "Giorgi",
      lastName: 'khomeriki',
      email: "GIo@gmail.com",
      password: "gio1234"
    }
  ];
  constructor() { }

  signUp(user: IUsers) {
    this.users.push(user);
    alert("Sign up successfully!");
    console.log(this.users);
  }

  signIn(email: string, password: string){
    const user = this.users.find(user => user.email === email);
    if(user){
      if(user.password === password){
          alert(`welcome back ${user.firstName}!`);
        }else{
          alert("password");
        }
      }else{
      alert(`Cannto find email`);
    }
  }
}
