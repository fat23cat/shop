import { ProductModel } from '../models/ProductModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() itemAdded = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(product: ProductModel): void {
    this.itemAdded.emit(product);
  }

}
