import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AgmCoreModule } from '@agm/core';
import {
  BsModalService,
  ModalBackdropComponent,
  ModalContainerComponent
} from 'ngx-bootstrap/modal';

import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader/component-loader.factory';
import { PositioningService } from 'ngx-bootstrap/positioning';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { JumboComponent } from './jumbo/jumbo.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    JumboComponent,
    DetailsComponent,
    ModalBackdropComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCRA-Ak2ugUWySATT0zQXHONKCZcf5V9Yg"
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    AngularFirestore,
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    DetailsComponent
  ],
  entryComponents: [
    ModalBackdropComponent,
    ModalContainerComponent,
    DetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
