import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistorComponent } from './registor.component';


const routes: Routes = [
  {
    path: '',
    component: RegistorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistorRoutingModule { }
