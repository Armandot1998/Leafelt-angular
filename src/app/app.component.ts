import { GeopositionService } from './services/geoposition.service';
import { MarkerService } from './services/marker.service';
import { Component, AfterViewInit } from '@angular/core';
import { Observable } from "rxjs";
import { PointService } from "./services/point.service";
import { Point } from "./models/point";
import * as L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-shadow.png";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private map;
  
  points: Observable<Point[]>;
  constructor(private geopositionService: GeopositionService, private pointService: PointService,
    private markerService: MarkerService) { 
  }

  ngAfterViewInit(): void {
    this.reloadData;
    this.initMap();
    this.geopositionService.getPosition().then(pos=>
      {
        console.log(`longitud: ${pos.lng}`);
        console.log(`Latitud: ${pos.lat}`);

        L.marker([pos.lat, pos.lng]).addTo(this.map);
      });
    this.markerService.makeCapitalMarkers(this.map);
    
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-0.22908149719911972, -78.51877212524415],
      zoom: 14,
      
    })
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: "QuitoGas",
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYXJtYW5kb3QxOTk4IiwiYSI6ImNrZTY3aTIyMzFhOGgyeXBkNHkzcWlnamEifQ.HL2cLzlPxOGz8ffAhYS2WA'
    });
    tiles.addTo(this.map);  
    this.map.on('click', this.onMapClick);
  }

private onMapClick(e) {
  var lat = e.latlng.lat;
  var long = e.latlng.lng;

  console.log(`longitud:`+ long);
  console.log(`Latitud:`+lat);
}

reloadData() {
  this.points = this.pointService.getPointsList();
}


 






}