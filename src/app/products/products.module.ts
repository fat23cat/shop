import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/productList/productList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
