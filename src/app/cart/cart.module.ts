import { SharedModule } from './../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
