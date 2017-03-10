import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Object[]

  constructor(private Data: DataService){ 
    Data.getBusinesses().subscribe(data => {
      console.log(data)
      this.markers = data;
    })
  }

  ngOnInit() {
    
  }

  lat: number = 38.91575
  lng: number = -77.015220
  zoom: number = 11
}
