import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { GeopositionService } from './services/geoposition.service';
import { MarkerService } from './services/marker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [
    GeopositionService,
    MarkerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
