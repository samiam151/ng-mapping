import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FilterService {

  constructor() { }

  test: string
}
