import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { CommonNavigationComponent } from './navigation/common-navigation/common-navigation.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CommonNavigationComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminNavigationComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then (m => m.AdminModule)
      },
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/vacationBuilder',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   component: VacationBuilderNavigationComponent,
  //   children: [
  //     {
  //       path: 'vacationBuilder',
  //       loadChildren: () => import('./modules/vacationBuilder/vacation-builder.module').then (m => m.VacationBuilderModule)
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
