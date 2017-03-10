import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FilterService } from '../services/filter.service';

import { Business } from '../models/business';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Object[]

  constructor(
    private Data: DataService,
    private Filter: FilterService){ 
      
      Data.getBusinesses().subscribe((data: Business[]) => {
        this.markers = data;
      })
    
  }

  ngOnInit() {
    
  }

  mapConfig: Object = {
    lat: 38.91575,
    lng: -77.015220,
    zoom: 11
  }
  
}
