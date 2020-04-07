import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FoodsComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    FormsModule
  ]
})
export class FoodsModule { }
