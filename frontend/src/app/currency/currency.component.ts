import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Observable } from 'rxjs';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.sass'],
})
export class CurrencyComponent implements OnInit {
  Data: any[] = [];
  DataBTC: any[] = [];
  DataETH: any[] = [];
  DataDoge: any[] = [];
  usdValue: string | number = 'Loading...';
  btcValue: string | number = 'Loading...';
  ethValue: string | number = 'Loading...';
  dogeValue: string | number = 'Loading...';
  shibValue: string | number = 'Loading...';
  eurValue: string | number = 'Loading...';
  gbpValue: string | number = 'Loading...';

  private url: string = 'http://fern.myftp.org:8000/currency/pln/';
  private url1: string = 'http://fern.myftp.org:8000/chart/btc/pln/';
  private url2: string = 'http://fern.myftp.org:8000/chart/eth/pln/';
  private url3: string = 'http://fern.myftp.org:8000/chart/doge/pln/';

  //----------------------------------------------
  lineChartDataBTC: ChartDataSets[] = [
    {
      data: [],
      label: `[PLN]Bitcoin ${new Date().toLocaleDateString()}`,
    },
  ];
  lineChartLabelsBTC: Label[] = [];
  lineChartDataETH: ChartDataSets[] = [
    { data: [], label: `[PLN]Ethereum ${new Date().toLocaleDateString()}` },
  ];
  lineChartLabelsETH: Label[] = [];
  lineChartDataDoge: ChartDataSets[] = [
    { data: [], label: `[PLN]Doge ${new Date().toLocaleDateString()}` },
  ];
  lineChartLabelsDoge: Label[] = [];
  //----------------------------------------------
  connection1: Observable<string> = new Observable<any>((observer) => {
    setInterval(() => observer.next(this.ConnectApi(this.url)), 900000);
  });
  connection2: Observable<string> = new Observable<any>((observer) => {
    setInterval(
      () => observer.next(this.ConnectApi2(this.url1, this.url2, this.url3)),
      900000
    );
  });
  //----------------------------------------------
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.ConnectApi(this.url);
    this.ConnectApi2(this.url1, this.url2, this.url3);
  }

  ConnectApi(url: string) {
    this.http.get(url).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.Data = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }

      this.btcValue = this.Data[0].value + ' zł';
      this.ethValue = this.Data[1].value + ' zł';
      this.dogeValue = this.Data[2].value + ' zł';
      this.shibValue = this.Data[3].value + ' zł';
      this.usdValue = this.Data[4].value + ' zł';
      this.eurValue = this.Data[5].value + ' zł';
      this.gbpValue = this.Data[6].value + ' zł';
    });
  }
  ConnectApi2(url1: string, url2: string, url3: string) {
    this.http.get(url1).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.DataBTC = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }
      //---
      this.lineChartDataBTC = [
        {
          data: this.DataBTC[1].value,
          label: `[PLN]Bitcoin ${new Date().toLocaleDateString()}`,
        },
      ];
      this.lineChartLabelsBTC = this.DataBTC[0].value;
    });
    this.http.get(url2).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.DataETH = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }
      //---
      this.lineChartDataETH = [
        {
          data: this.DataETH[1].value,
          label: `[PLN]Ethereum ${new Date().toLocaleDateString()}`,
        },
      ];
      this.lineChartLabelsETH = this.DataETH[0].value;
    });
    this.http.get(url3).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.DataDoge = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }
      //---
      this.lineChartDataDoge = [
        {
          data: this.DataDoge[1].value,
          label: `[PLN]Doge ${new Date().toLocaleDateString()}`,
        },
      ];
      this.lineChartLabelsDoge = this.DataDoge[0].value;
    });
  }
}
