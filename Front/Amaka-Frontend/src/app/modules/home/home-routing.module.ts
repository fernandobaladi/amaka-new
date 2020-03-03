import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [ {
  path: '',
  redirectTo: '/home/home',
  pathMatch: 'full'
},
  {
    path: '',
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
