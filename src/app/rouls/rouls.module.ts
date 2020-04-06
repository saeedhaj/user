import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoulsRoutingModule } from './rouls-routing.module';
import { RoulsComponent } from './rouls.component';


@NgModule({
  declarations: [RoulsComponent],
  imports: [
    CommonModule,
    RoulsRoutingModule
  ]
})
export class RoulsModule { }
