import { Subscription } from 'rxjs';
import { CommunicationService } from './../../../services/communication.service';
import { ProductModel } from '../../../products/models/ProductModel';
import { CartService } from '../../../cart/services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items: Array<ProductModel> | null;
  private anchor: Subscription;
  public lastUpdate: Date;

  constructor(public cartService: CartService,
    private communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.anchor = this.communicationService.emitAddEvent.subscribe(x => {
      this.items = this.cartService.getBoughtItems();
      this.lastUpdate = new Date();
    });
  }

  ngOnDestroy() {
    this.anchor.unsubscribe();
  }

}
