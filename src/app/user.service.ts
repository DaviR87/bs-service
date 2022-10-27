import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [];

  constructor() { }

  getAllUsers() {
    return this.userList;
  }

  addUser(user: User) {
    this.userList.push(user)
  }

  deleteUser(i: number) {
    this.userList.splice(i, 1);
  }

}
