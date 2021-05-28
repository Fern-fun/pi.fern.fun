import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { __values } from 'tslib';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass'],
})
export class StockComponent implements OnInit {
  Data1: any[] = [];
  Data2: any[] = [];
  tslaValue: any = 'Loading...';

  url1: string = 'http://fern.myftp.org:8000/stock/';
  url2: string = 'http://fern.myftp.org:8000/chart/stock/tsla/';

  //-----------------------------------------
  lineChartData: ChartDataSets[] = [{ data: [], label: 'TSLA stock price' }];
  lineChartLabels: Label[] = [];
  //-----------------------------------------

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.ConnectApi(this.url1, this.url2);
  }
  ConnectApi(url1: string, url2: string) {
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

      this.tslaValue = this.Data1[0].value + ' zł';
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
  }
}
