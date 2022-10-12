import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { NewComponent } from './page/new/new.component';
import { ShopComponent } from './page/shop/shop.component';

const routes: Routes = [
  {
  path: '', component: HomeComponent
},
{
  path: 'about', component: AboutComponent
},
{
  path:'new' , component:NewComponent
},
{
  path:'shop' , component:ShopComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
