import { CartService } from './../services/cart.service';
import { CommunicationService } from './../services/communication.service';
import { ProductModel } from '../models/ProductModel';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

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

}
