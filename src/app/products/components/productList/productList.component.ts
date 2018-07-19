import { CartService } from '../../../cart/services/cart.service';
import { CommunicationService } from './../../../services/communication.service';
import { ProductModel } from '../../models/ProductModel';
import { ProductsService } from '../../../products/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;
  field: string = 'price';
  reverse: boolean = false;
  type: string = '↑';

  constructor(private productsService: ProductsService,
    private communicationService: CommunicationService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product) {
    console.log('Item bought!');
    this.cartService.addItemToCart(product);
    this.communicationService.itemAdded();
  }

  onSortSelect(value: string) {
    this.field = value;
  }

  onTypeChanged() {
    this.reverse = !this.reverse;
    this.reverse ? this.type = '↓' : this.type = '↑';
  }

}
