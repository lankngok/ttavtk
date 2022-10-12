import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/header/header.component';
import { AboutComponent } from './page/about/about.component';
import { NewComponent } from './page/new/new.component';
import { ShopComponent } from './page/shop/shop.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    NewComponent,
    ShopComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
