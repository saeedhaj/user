import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistorRoutingModule } from './registor-routing.module';
import { RegistorComponent } from './registor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistorComponent],
  imports: [
    CommonModule,
    RegistorRoutingModule,
    FormsModule
  ]
})
export class RegistorModule { }
