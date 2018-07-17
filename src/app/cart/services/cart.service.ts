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
    const result = [...this.items.reduce((mp, o) => {
      if (!mp.has(o.name)) mp.set(o.name, Object.assign({ count: 0 }, o));
      mp.get(o.name).count++;
      return mp;
    }, new Map).values()];
    return result;
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
