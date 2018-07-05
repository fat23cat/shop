import { Subscription } from 'rxjs';
import { CommunicationService } from './../services/communication.service';
import { IProduct } from './../models/IProduct';
import { CartService } from './../services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items: Array<IProduct> | null;
  private anchor: Subscription;

  constructor(private cartService: CartService,
    private communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.anchor = this.communicationService.emitAddEvent.subscribe(x => {
      this.items = this.cartService.getBoughtItems();
    });
  }

  ngOnDestroy() {
    this.anchor.unsubscribe();
  }

}
