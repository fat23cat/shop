import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './directives/background.directive';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    BackgroundDirective
  ],
  exports: [
    BackgroundDirective,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule { }
