import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './directives/background.directive';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    BackgroundDirective,
    OrderByPipe
  ],
  exports: [
    BackgroundDirective,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    OrderByPipe
  ]
})
export class SharedModule { }
