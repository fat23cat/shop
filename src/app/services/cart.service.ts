import { ProductModel } from '../models/ProductModel';
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
}
