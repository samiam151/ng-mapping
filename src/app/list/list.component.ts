import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FilterService } from '../services/filter.service';
import { ListpanelComponent } from './listpanel/listpanel.component';

import { Business } from '../models/business';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public businesses: Object[]
    public businessesDisplay: Object[]
    public types: string[]
    public configs: Object[] = []

    constructor(
        private Data: DataService,
        private Filter: FilterService) {
            Data.getBusinesses().subscribe((data: Business[]) => {
                this.businesses = data
                this.businessesDisplay = data
                this.types = this.Filter.getUniqueTypes(data)
        })
    }

    public filterForType(type: string, e :Event){
        this.toggleSelected(e)
        this.businessesDisplay = this.businesses.filter((business: Business) => {
            return business.types.includes(type)
        })
    }

    public searchDescription(e) {
        let term: string = e.target.value
        if (term.length > 1){
            this.businessesDisplay = this.businesses.filter((business: Business) => {
                return business.description.toLowerCase().includes(term.toLowerCase()) || business.name.toLowerCase().includes(term.toLowerCase())
            })
        } else {
            this.businessesDisplay = this.businesses
        }
    }

    private toggleSelected(e: Event){
        let selected = document.querySelector('.selected');
        if (selected){
            document.querySelector('.selected').classList.remove('selected')
        }
        e.target['classList'].add('selected')
    }

    private setConfigs(){

    }

}
