import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    component:LoginComponent,
    pathMatch: 'full',
  }, {
    path: '**',
    component: AdminLayoutComponent,
    children: AdminLayoutRoutes,
    canActivate: [ AuthGuard ]},
  
]
