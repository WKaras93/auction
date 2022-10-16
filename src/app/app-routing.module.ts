import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductBoughtComponent } from './product-bought/product-bought.component';
import { LoginGuard } from './shared/login.guard';
import { UnsavedChangesGuard } from './shared/unsave-changes.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [UnsavedChangesGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'products/:productID', component: ProductDetailComponent},
  {path: 'products/buy/:productID', component: ProductBoughtComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
