import { Component, OnInit } from '@angular/core';
import { MyStateService } from '../my-state.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  leftState: boolean = false;

  constructor(private mySvc: MyStateService) { }

  ngOnInit(): void {
    this.mySvc.state.subscribe(val => {
      this.leftState = val;
    })
  }

  changeState() {
    this.mySvc.state.next(!this.leftState);
  }

}
