import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
