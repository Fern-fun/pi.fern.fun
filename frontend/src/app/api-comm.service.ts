import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';

interface Data {
  parameter: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiCommService {
  private API_server = 'http://fern.myftp.org/api/cpu/temp/now';
  constructor(private http: HttpClient) {}

  public GetData() {
    return this.http.get<Data>(this.API_server);
  }
}
