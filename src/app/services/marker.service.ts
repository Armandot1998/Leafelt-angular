import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  points: string = 'http://localhost:3000/points';

  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.points).subscribe((res: any) => {
      for (const c of res.points) {
        const lat = c.lat;
        const lon = c.long;
        console.log(lon, lat);
        L.marker([lat, lon]).addTo(map);
      }
    });
  }
}
