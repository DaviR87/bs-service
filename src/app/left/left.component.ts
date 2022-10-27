import { Component, OnInit } from '@angular/core';
import { MyStateService } from '../my-state.service';
import { UserService } from '../user.service';
import { uniqueNamesGenerator, Config, names, NumberDictionary } from 'unique-names-generator';
import { User } from '../model/user';

const config: Config = {
  dictionaries: [names]
}

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  leftState: boolean = false;

  constructor(
    private mySvc: MyStateService,
    private userSvc: UserService) { }

  ngOnInit(): void {
    this.mySvc.state.subscribe(val => {
      this.leftState = val;
    })
  }

  changeState() {
    this.mySvc.state.next(!this.leftState);
  }

  addUser() {
    const name: string = uniqueNamesGenerator(config);
    const id: number = Number(NumberDictionary.generate({ min: 100, max: 999 })[0]);
    this.userSvc.addUser(new User(id, name));
  }

}
