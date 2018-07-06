import { ProductModel } from '../models/ProductModel';
import { CartService } from './../services/cart.service';
import { CommunicationService } from './../services/communication.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(private communicationService: CommunicationService,
    private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product: ProductModel): void {
    console.log('Item bought!');
    this.cartService.addItemToCart(product);
    this.communicationService.itemAdded();
  }

}
