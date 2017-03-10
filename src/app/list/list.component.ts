import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FilterService } from '../services/filter.service';

import { Business } from '../models/business';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  businesses: Object[]
  businessesPlay: Object[]
  types: string[]

  constructor(
    private Data: DataService,
    private Filter: FilterService) {
        Data.getBusinesses().subscribe((data: Business[]) => {
          this.businesses = data
          this.businessesPlay = data
          this.types = this.Filter.getUniqueTypes(data)

          console.log(this.businesses[0])
        })
  }

  filterForType(type: string){
    this.businessesPlay = this.businesses.filter((business: Business) => {
      return business.types.includes(type)
    })
  }

  searchDescription(e) {
    let term = e.target.value
    if (term.length > 1){
      this.businessesPlay = this.businesses.filter((business: Business) => {
        return business.description.includes(term)
      })
    }
  }

}
