import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Business } from '../models/business';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  businesses: Object[]

  constructor(private Data: DataService) {
      Data.getBusinesses().subscribe((data: Business[]) => {
        this.businesses = data
      })
  }

  ngOnInit() {
  }

}
