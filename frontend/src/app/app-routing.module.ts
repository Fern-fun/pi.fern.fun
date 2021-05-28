import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUpdateComponent } from './app-update/app-update.component';
import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { StockComponent } from './stock/stock.component';
// import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'appUpdate', component: AppUpdateComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'stock', component: StockComponent },
  { path: 'status', component: StatusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
