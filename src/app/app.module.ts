import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from 'app/login/login.component';
import { AuthService } from "./services/auth.service";
import { StorageService } from "./services/storage.service";
import { AuthGuard } from "./services/auth-guard.service";
import { CommonModule } from "@angular/common";
import { CategoryComponent } from "./pages/category/category.component";
import { CompanyComponent } from "./pages/company/company.component";
import { ProductsComponent } from "./pages/products/products.component";
import { UserComponent } from "./pages/user/user.component";
import { UserService } from "./services/user.service";






@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent,
    CompanyComponent,
    UserComponent,
    LoginComponent,
    AppComponent,
    AdminLayoutComponent,
    ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
  ],
  providers: [ AuthService,
    UserService,
    StorageService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
