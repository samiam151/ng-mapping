import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Business } from '../models/business';

@Injectable()
export class BusinessDetailActivator implements CanActivate {

    constructor(
        private Data: DataService,
        private router:Router
        ) { }

    canActivate(route:ActivatedRouteSnapshot) {
        const businessExists = !!this.Data.getBusiness(route.params['id'])

        if (!businessExists)
            this.router.navigate(['/404'])
        return businessExists
    }
}