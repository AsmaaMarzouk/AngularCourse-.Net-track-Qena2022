import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

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
  {path:'Products',component:ProductsComponent},
  {path:'Products/:pid',component:ProductDetailsComponent},
  {path:'Order',component:OrderMasterComponent},
  ]},
   {path:'**',component:NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
