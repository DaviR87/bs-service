import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyStateService {

  state = new BehaviorSubject<boolean>(false);

  constructor() { }

}
