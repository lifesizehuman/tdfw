import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [AppComponent, MainComponent, MapComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRA-Ak2ugUWySATT0zQXHONKCZcf5V9Yg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
