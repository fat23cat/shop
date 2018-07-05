import { IProduct } from './../models/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Array<IProduct> = [];
  constructor() { }

  addItemToCart(item: IProduct): void {
    this.items.push(item);
  }

  getBoughtItems(): Array<IProduct> {
    return this.items;
  }
}
