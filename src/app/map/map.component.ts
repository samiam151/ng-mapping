import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

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

  lat: number = 38.917
  lng: number = -77.016420
}
