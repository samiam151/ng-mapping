import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DataService} from './data-service.service';

import { Business } from '../models/business';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FilterService {

  constructor(private Data: DataService) { }

  getUniqueTypes(data: Business[]): string[] {
    let types: any[] = []
    
    data.forEach((business: Business) => {
            
      if (business.types){
        business.types.forEach((type) => {
          if (!types.includes(type)){
            types.push(type)
          }        
        })
      }

    })

    return types
  }
}
