import { IProduct } from './../models/IProduct';
import { Injectable } from '@angular/core';

export interface Product {
  getProducts(): Array<IProduct>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements Product {
  private products: Array<IProduct> = [
    {
      name: "Kia Rio",
      description: "car",
      price: 10000,
      isAvailable: true,
      tags: [
        "car",
        "korean"
      ]
    },
    {
      name: "VW Polo",
      description: "car",
      price: 9999,
      isAvailable: false,
      tags: [
        "car",
        "red"
      ]
    },
    {
      name: "Lada Vesta",
      description: "car",
      price: 9,
      isAvailable: true,
      tags: [
        "car",
        "cheap"
      ]
    }
  ];
  constructor() { }

  getProducts(): Array<IProduct> {
    return this.products;
  }
}
