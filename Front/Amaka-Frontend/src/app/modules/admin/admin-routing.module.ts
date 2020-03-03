import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/admin/login',
    pathMatch: 'full'
  },
    {
      path: '',
      children:[
        {
          path: 'login',
          component: AdminLoginComponent
        },
        {
          path: 'products',
          component: AdminProductsComponent
        },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
