import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoulsRoutingModule } from './rouls-routing.module';
import { RoulsComponent } from './rouls.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RoulsComponent],
  imports: [
    CommonModule,
    RoulsRoutingModule,
    FormsModule
  ]
})
export class RoulsModule { }
