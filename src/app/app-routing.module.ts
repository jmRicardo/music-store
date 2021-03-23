import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandComponent } from './brand/brand.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [

  { path: 'brands', component: BrandComponent},
  { path: 'about', component: AboutUsComponent },
  { path: 'search', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
