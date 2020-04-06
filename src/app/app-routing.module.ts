import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import("./registor/registor.module").then(m => m.RegistorModule)
  },
  {
    path: 'user',
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: 'rouls',
    loadChildren: () => import("./rouls/rouls.module").then(m => m.RoulsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
