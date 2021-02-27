import { Routes } from '@angular/router';


import { UserComponent } from '../../pages/user/user.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CompanyComponent } from 'app/pages/company/company.component';
import { CategoryComponent } from 'app/pages/category/category.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'company',           component: CompanyComponent },
    { path: 'user',           component: UserComponent },
    { path: 'products',          component: ProductsComponent },
    { path: 'category',          component: CategoryComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
