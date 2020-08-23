import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { GeopositionService } from './services/geoposition.service';

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
  providers: [GeopositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }