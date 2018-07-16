import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './directives/background.directive';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    BackgroundDirective
  ],
  exports: [
    BackgroundDirective,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule { }
