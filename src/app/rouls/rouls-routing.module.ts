import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoulsComponent } from './rouls.component';


const routes: Routes = [
  {
    path:'',
    component:RoulsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoulsRoutingModule { }
