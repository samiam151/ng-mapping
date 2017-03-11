import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data-service.service';
import { Business } from '../models/business';

@Component({
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent {
  business: Business

  constructor(
    private route: ActivatedRoute,
    private Data: DataService) {
      let name = this.route.params['name']
      Data.getBusiness(name).subscribe((business: Business) => {
        this.business = business
      })
  }

}
