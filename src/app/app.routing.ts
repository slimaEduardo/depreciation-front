import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [//children significa que terá rotas filhas dentro da pagina
      { pathMatch: 'full', path: 'company', component: CompanyComponent },
      { pathMatch: 'full', path: 'category', component: CategoryComponent },
      { pathMatch: 'full', path: 'products', component: ProductsComponent },
      { pathMatch: 'full', path: 'user', component: UserComponent }
      ],

    canActivate: [ AuthGuard ]},  
]
