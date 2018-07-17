import { ProductModel } from './../../../products/models/ProductModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
