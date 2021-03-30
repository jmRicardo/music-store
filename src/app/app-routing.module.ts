import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandComponent } from './brand/brand.component';
import { NavComponent } from './nav/nav.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'brands',
        loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
