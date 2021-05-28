import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { __values } from 'tslib';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass'],
})
export class StatusComponent implements OnInit {
  Data: any[] = [];
  DCS: string = 'DCS';
  SDS: string = 'SDS';
  fernFunIsActive: boolean = false;
  fernfunStatus: string = 'Offline';
  dcsIsActive: boolean = false;
  dcsStatus: string = 'Offline';
  sdsIsActive: boolean = false;
  sdsStatus: string = 'Offline';
  discordBotIsActive: boolean = false;
  discordbotStatus: string = 'Offline';
  x: number = 0;

  url: string = 'http://fern.myftp.org:8000/status/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.ConnectApi(this.url);
  }

  changeState(event: any) {
    if (this.x == 0) {
      if (event.currentTarget.id === 'dcs') {
        this.DCS = 'Data collection services';
      } else if (event.currentTarget.id === 'sds') {
        this.SDS = 'Stock data services';
      }
      this.x = 1;
    } else if (this.x == 1) {
      if (event.currentTarget.id === 'dcs') {
        this.DCS = 'DCS';
      } else if (event.currentTarget.id === 'sds') {
        this.SDS = 'SDS';
      }
      this.x = 0;
    }
    // console.log(event);
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
      this.fernFunIsActive = this.Data[3].value === 'Active' ? true : false;
      this.fernfunStatus = this.fernFunIsActive ? 'Online' : 'Offline';
      this.dcsIsActive = this.Data[1].value === 'Active' ? true : false;
      this.dcsStatus = this.dcsIsActive ? 'Online' : 'Offline';
      this.sdsIsActive = this.Data[2].value === 'Active' ? true : false;
      this.sdsStatus = this.sdsIsActive ? 'Online' : 'Offline';
      this.discordBotIsActive = this.Data[0].value === 'Active' ? true : false;
      this.discordbotStatus = this.discordBotIsActive ? 'Online' : 'Offline';
    });
  }
}
