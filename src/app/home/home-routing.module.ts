import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import("../user/user.module").then(m => m.UserModule)
      },
      {
        path: 'rouls',
        loadChildren: () => import("../rouls/rouls.module").then(m => m.RoulsModule)
      },
      {
        path: 'foods',
        loadChildren: () => import("../foods/foods.module").then(m => m.FoodsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
