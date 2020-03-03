import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';


@NgModule({
  declarations: [AdminLoginComponent, AdminProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
