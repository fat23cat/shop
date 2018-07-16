import { SharedModule } from './../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/productList/productList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
