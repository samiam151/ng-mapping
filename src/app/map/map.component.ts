import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private Data: DataService){ 
    Data.getBusinesses().subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit() {
    
  }

  lat: number = 38.9
  lng: number = -77.015420
  zoom: number = 11
}
