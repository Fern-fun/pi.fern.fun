import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { __values } from 'tslib';

@Component({
  selector: 'app-app-update',
  templateUrl: './app-update.component.html',
  styleUrls: ['./app-update.component.sass'],
})
export class AppUpdateComponent implements OnInit {
  Data: any[] = [];
  iosVer: string | number = 'Loading...';
  factorioVer: string | number = 'Loading...';
  leagueVer: string | number = 'Loading...';
  macosVer: string | number = 'Loading...';

  private url: string = 'http://fern.myftp.org:8000/appupdate/';

  // connection1: Observable<string> = new Observable<any>((observer) => {
  //   setInterval(() => observer.next(this.ConnectApi(this.url)), 2000);
  // });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.ConnectApi(this.url);
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

      this.macosVer = this.Data[0].value;
      this.iosVer = this.Data[1].value;
      this.factorioVer = this.Data[2].value;
      this.leagueVer = this.Data[3].value;
    });
  }
}
