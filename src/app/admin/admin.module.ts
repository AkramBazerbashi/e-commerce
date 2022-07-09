import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { CartsModule } from '../carts/carts.module';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    CartsModule
  ]
})
export class AdminModule { }
