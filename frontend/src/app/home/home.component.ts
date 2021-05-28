import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { __values } from 'tslib';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  Data: any = [];
  DataRAM: any = [];
  DataCPU: any = [];
  versionNumber: any = 'Loading...';
  cpuTemp: any = 'Loading...';
  cpuUsage: any = 'Loading...';
  memUsage: any = 'Loading...';
  diskUsage: any = 'Loading...';

  private url1: string = 'http://fern.myftp.org:8000/home/';
  private url2: string = 'http://fern.myftp.org:8000/chart/ram/';
  private url3: string = 'http://fern.myftp.org:8000/chart/cpu/usage/';
  private url4: string = 'http://fern.myftp.org:8000/chart/cpu/temp/';

  // -------------------------------------------------------------
  lineChartDataRAM: ChartDataSets[] = [{ data: [], label: 'RAM usage' }];
  lineChartLabelsRAM: Label[] = [];
  lineChartDataCPU: ChartDataSets[] = [{ data: [], label: 'CPU usage' }];
  lineChartLabelsCPU: Label[] = [];
  lineChartDataTemp: ChartDataSets[] = [{ data: [], label: 'CPU Temperature' }];
  lineChartLabelsTemp: Label[] = [];
  //------------------------------------------------------------------
  connection1: Observable<string> = new Observable<any>((observer) => {
    setInterval(() => observer.next(this.ConnectApi(this.url1)), 1500);
  });
  connection2: Observable<string> = new Observable<any>((observer) => {
    setInterval(
      () => observer.next(this.ConnectApi2(this.url2, this.url3, this.url4)),
      900000
    );
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.ConnectApi(this.url1);
    this.ConnectApi2(this.url2, this.url3, this.url4);
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

      // this.temp = this.Data[0].value + ' ºC';
      this.versionNumber = this.Data[0].value;
      this.cpuTemp =
        (Math.round(this.Data[1].value * 100) / 100).toFixed(1) + ' ºC';
      this.memUsage = this.Data[2].value + ' %';
      this.diskUsage = this.Data[3].value;
      this.cpuUsage = this.Data[4].value + ' %';
      // for (let i in this.Data) {
      //   console.log(this.Data[i]);
      // }
    });
  }
  // --------------------------------------------------------------------
  ConnectApi2(url: string, url2: string, url3: string) {
    this.http.get(url).subscribe((resp) => {
      // console.log(resp);

      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.DataRAM = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }

      // this.temp = this.Data[0].value + ' ºC';
      this.lineChartLabelsRAM = this.DataRAM[0].value;
      this.lineChartDataRAM = [
        { data: this.DataRAM[1].value, label: 'RAM usage' },
      ];
    });
    this.http.get(url2).subscribe((resp) => {
      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.DataCPU = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }
      this.lineChartLabelsCPU = this.DataCPU[0].value;
      this.lineChartDataCPU = [
        { data: this.DataCPU[1].value, label: 'CPU usage' },
      ];
    });
    this.http.get(url3).subscribe((resp) => {
      for (let key in resp) {
        if (resp.hasOwnProperty(key)) {
          this.DataCPU = Object.entries(resp).map(([parameter, value]) => ({
            parameter,
            value,
          }));
        }
      }
      this.lineChartLabelsTemp = this.DataCPU[0].value;
      this.lineChartDataTemp = [
        { data: this.DataCPU[1].value, label: 'CPU Temperature' },
      ];
    });
  }
}
