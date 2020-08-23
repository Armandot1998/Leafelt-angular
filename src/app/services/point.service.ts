import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient) { }

  getPoint(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPoint(point: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, point);
  }
  
  getPointsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
