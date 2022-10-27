import { Component } from '@angular/core';
import { MyStateService } from './my-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bs-service';

  appState: boolean = false;
  constructor(private mySvc: MyStateService) {
    mySvc.state.subscribe(val => {
      this.appState = val;
    })
  }

  changeState() {
    this.mySvc.state.next(!this.appState);
  }
}
