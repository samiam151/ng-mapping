import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data-service.service';
import { Business } from '../models/business';


@Component({
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent {
  public business: any
  public keys: string[]
  public isAvailable: boolean

  constructor(
    private route: ActivatedRoute,
    private Data: DataService) {
      
      Data.getBusinesses().subscribe((data: Business[]) => {
        let id = +this.route.snapshot.params['id']
        this.business = data[id]
        this.keys = Object.keys(this.business)

        this.isAvailable = true;
      })
  }


}
