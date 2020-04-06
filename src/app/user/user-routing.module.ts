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
        path:'',
        redirectTo:'add-user',
        pathMatch:'full'
      },
      {
        path: 'user-detail',
        loadChildren: () => import("../user-detail/user-detail.module").then(m => m.UserDetailModule)
      },
      {
        path: 'add-user',
        loadChildren: () => import("../add-user/add-user.module").then(m => m.AddUserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
