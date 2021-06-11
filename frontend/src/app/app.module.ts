import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { AppRoutingModule } from './app-routing.module';
import { AppUpdateComponent } from './app-update/app-update.component';
import { CurrencyComponent } from './currency/currency.component';
import { StockComponent } from './stock/stock.component';
import { StatusComponent } from './status/status.component';
import { ToolsComponent } from './tools/tools.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PanelComponent,
    AppUpdateComponent,
    CurrencyComponent,
    StockComponent,
    StatusComponent,
    ToolsComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    MatProgressBarModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
