import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailModule } from '../user-detail/user-detail.module';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'user-detail',
        loadChildren: () => import("../user-detail/user-detail.module").then(m => m.UserDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
