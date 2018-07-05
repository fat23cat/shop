import { IProduct } from './../models/IProduct';
import { CartService } from './../services/cart.service';
import { CommunicationService } from './../services/communication.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private communicationService: CommunicationService,
    private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product: IProduct): void {
    console.log('Item bought!');
    this.cartService.addItemToCart(product);
    this.communicationService.itemAdded();
  }

}
