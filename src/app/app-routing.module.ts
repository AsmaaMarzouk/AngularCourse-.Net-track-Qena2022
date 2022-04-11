import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewproductComponent } from './Components/Admin/addnewproduct/addnewproduct.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserResgisterComponent } from './Components/user-resgister/user-resgister.component';
import { AuthGuard } from './Guards/auth.guard';

// array => objects of path each component
// const routes: Routes = [
//   // path , component
//   // {path:'',redirectTo:'/Home',pathMatch:'full'},Default path
//   {path:'Home',component:HomeComponent},
//   {path:'Products',component:ProductsComponent},
//   {path:'Order',component:OrderMasterComponent},
//   // wildcard
//   // ** => not found path
//   {path:'**',component:NotfoundComponent},

// ];
const routes: Routes = [
  // First match wins 

  // {path:'website',component:MainLayoutComponent,children:[
  {path:'',component:MainLayoutComponent,children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'Products/:pid',component:ProductDetailsComponent},
  {path:'Order',component:OrderMasterComponent},
  {path:'NewProduct',component:AddnewproductComponent},
  {path:'EditProduct/:pid',component:AddnewproductComponent},
  ]},
  {path:'login',component:UserLoginComponent},
  {path:'resgister',component:UserResgisterComponent},
   {path:'**',component:NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
