import { ProductModel } from '../../products/models/ProductModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Array<ProductModel> = [];
  constructor() { }

  addItemToCart(item: ProductModel): void {
    this.items.push(item);
  }

  getBoughtItems(): Array<ProductModel> {
    return this.items;
  }

  getItemsCount() {
    return this.items.length;
  }

  getItemsAnount() {
    let sum = 0;
    this.items.forEach( item => {
      sum += item.price;
    });
    return sum;
  }

}
