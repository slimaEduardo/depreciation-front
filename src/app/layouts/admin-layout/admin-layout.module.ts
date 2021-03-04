import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { ProductsComponent }           from '../../pages/products/products.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyComponent } from 'app/pages/company/company.component';
import { CategoryComponent } from 'app/pages/category/category.component';
import { UserComponent }            from '../../pages/user/user.component';
import { NewProductComponent } from 'app/pages/products/new-product/new-product.component';
import { NewCompanyComponent } from 'app/pages/company/new-company/new-company.component';
import { DelCompanyComponent } from 'app/pages/company/del-company/del-company.component';
import { UpdateCompanyComponent } from 'app/pages/company/update-company/update-company.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    UpdateCompanyComponent,  
    DelCompanyComponent,
    NewProductComponent,
    NewCompanyComponent,
    ProductsComponent,
    CategoryComponent,
    CompanyComponent,
    UserComponent,
    ProductsComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
