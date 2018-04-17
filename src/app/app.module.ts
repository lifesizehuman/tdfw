import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { JumboComponent } from './jumbo/jumbo.component';

import { TasksComponent } from './tasks/tasks.component';
import { ManagerService } from './manager.service';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JumboComponent,
    TasksComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule.enablePersistence()
    
  ],
  providers: [AngularFirestore, ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
