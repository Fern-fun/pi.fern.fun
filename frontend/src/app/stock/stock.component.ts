import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { __values } from 'tslib';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass'],
})
export class StockComponent implements OnInit {
  Data1: any[] = [];
  Data2: any[] = [];
  Data3: any[] = [];
  Data4: any[] = [];
  tslaValue: any = 'Loading...';
  aaplValue: any = 'Loading...';
  msftValue: any = 'Loading...';

  url1: string = 'http://fern.myftp.org:8000/stock/';
  url2: string = 'http://fern.myftp.org:8000/chart/stock/tsla/';
  url3: string = 'http://fern.myftp.org:8000/chart/stock/aapl/';
  url4: string = 'http://fern.myftp.org:8000/chart/stock/msft/';

  //-----------------------------------------
  lineChartData: ChartDataSets[] = [{ data: [], label: 'TSLA stock price' }];
  lineChartLabels: Label[] = [];
  lineChartDataAAPL: ChartDataSets[] = [
    { data: [], label: 'AAPL stock price' },
  ];
  lineChartLabelsAAPL: Label[] = [];
  lineChartDataMSFT: ChartDataSets[] = [
    { data: [], label: 'MSFT stock price' },
  ];
  lineChartLabelsMSFT: Label[] = [];
  //-----------------------------------------

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.ConnectApi(this.url1, this.url2, this.url3, this.url4);
  }
  ConnectApi(url1: string, url2: string, url3: string, url4: string) {
    this.http.get(url1).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.Data1 = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }

      this.tslaValue = this.Data1[0].value;
      this.aaplValue = this.Data1[1].value;
      this.msftValue = this.Data1[2].value;
      // console.log(this.Data[0]);
    });
    this.http.get(url2).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.Data2 = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }

      // console.log(this.Data[0]);
      this.lineChartLabels = this.Data2[0].value;
      this.lineChartData = [
        { data: this.Data2[1].value, label: 'TSLA stock price' },
      ];
    });
    this.http.get(url3).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.Data3 = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }

      // console.log(this.Data[0]);
      this.lineChartLabelsAAPL = this.Data3[0].value;
      this.lineChartDataAAPL = [
        { data: this.Data3[1].value, label: 'AAPL stock price' },
      ];
    });
    this.http.get(url4).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.Data4 = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }

      // console.log(this.Data[0]);
      this.lineChartLabelsMSFT = this.Data4[0].value;
      this.lineChartDataMSFT = [
        { data: this.Data4[1].value, label: 'MSFT stock price' },
      ];
    });
  }
}
