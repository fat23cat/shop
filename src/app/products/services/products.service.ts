import { ProductModel } from '../models/ProductModel';
import { Injectable } from '@angular/core';

export interface Product {
  getProducts(): Array<ProductModel>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements Product {
  private products: Array<ProductModel> = [
    {
      name: "Kia Rio",
      description: "car",
      price: 10000,
      isAvailable: true,
      tags: [
        "car",
        "korean"
      ],
      warranty: 5
    },
    {
      name: "VW Polo",
      description: "car",
      price: 9999,
      isAvailable: false,
      tags: [
        "car",
        "red"
      ],
      warranty: 2
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

  getProducts(): Array<ProductModel> {
    return this.products;
  }
}
