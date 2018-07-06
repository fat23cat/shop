import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private add = new Subject<any>();
  emitAddEvent = this.add.asObservable();

  constructor() { }

  itemAdded(): void {
    this.add.next();
  }

}
