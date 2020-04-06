import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';


const routes: Routes = [
  {
    path:'',
    component: UserDetailComponent,
    children:[
      {
        path:'add-user',
        loadChildren:() =>import("../add-user/add-user-routing.module").then(m=>m.AddUserRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailRoutingModule { }
