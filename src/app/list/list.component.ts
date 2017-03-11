import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FilterService } from '../services/filter.service';

import { Business } from '../models/business';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
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

    public filterForType(type: string, e :Event){
        this.toggleSelected(e)
        this.businessesPlay = this.businesses.filter((business: Business) => {
            return business.types.includes(type)
        })
    }

    public searchDescription(e) {
        let term: string = e.target.value
        if (term.length > 1){
            this.businessesPlay = this.businesses.filter((business: Business) => {
                return business.description.toLowerCase().includes(term.toLowerCase()) || business.name.toLowerCase().includes(term.toLowerCase())
            })
        } else {
            this.businessesPlay = this.businesses
        }
    }

    private toggleSelected(e: Event){
        let selected = document.querySelector('.selected');
        if (selected){
            document.querySelector('.selected').classList.remove('selected')
        }
        e.target['classList'].add('selected')
    }

}
