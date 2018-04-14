import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, MainComponent, MapComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRA-Ak2ugUWySATT0zQXHONKCZcf5V9Yg'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
