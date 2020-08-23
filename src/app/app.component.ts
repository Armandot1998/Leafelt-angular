import { GeopositionService } from './services/geoposition.service';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private map;
  private popup;
  constructor(private geopositionService: GeopositionService) { 
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.geopositionService.getPosition().then(pos=>
      {
        console.log(`longitud: ${pos.lng}`);
        console.log(`Latitud: ${pos.lat}`);

        L.marker([pos.lat, pos.lng]).addTo(this.map);
      });
      
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




 






}