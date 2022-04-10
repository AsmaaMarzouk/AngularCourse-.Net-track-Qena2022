import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { ConvertUSDtoEGPPipe } from './pipes/convert-usdto-egp.pipe';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddnewproductComponent } from './Components/Admin/addnewproduct/addnewproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ProductsComponent,
    LightBoxDirective,
    ConvertUSDtoEGPPipe,
    OrderMasterComponent,
    NotfoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddnewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

