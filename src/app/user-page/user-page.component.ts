import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  utenti: User[] = [];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.utenti = [...this.userSvc.getAllUsers()];
  }

  deleteUser(index: number) {
    this.userSvc.deleteUser(index);
    this.getUsers();
  }

}
