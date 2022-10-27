import { Component, OnInit } from '@angular/core';
import { MyStateService } from '../my-state.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  rightState: boolean = false;

  constructor(private mySvc: MyStateService) { }

  ngOnInit(): void {
    this.mySvc.state.subscribe(val => {
      this.rightState = val;
    })
  }

  changeState() {
    this.mySvc.state.next(!this.rightState);
  }

}
