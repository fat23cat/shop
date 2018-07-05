import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private add = new Subject<any>();
  emitAddEvent = this.add.asObservable();

  itemAdded(): void {
    this.add.next();
  }

}
