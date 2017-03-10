import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  private url = "../assets/data.json"

  getBusinesses(): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers }); 
      return this.http.get(this.url, options).map(data => this.parseData(data))
  }

  private parseData(res: Response) {
    let body = res.json()
    return body || {}
  }
}
