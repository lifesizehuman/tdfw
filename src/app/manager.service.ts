import { config } from './app.config';
import { Task } from './app.model';
import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable()
export class ManagerService {
  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

constructor(private db: AngularFirestore) {
   this.tasks = db.collection<Task>(config.collection_endpoint);
}

addTask(task) {
  this.tasks.add(task);
}

markComplete(id) {
 this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
 this.taskDoc.update({id, completed: true});
}

markIncomplete(id) {
   this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
   this.taskDoc.update({id, completed: false});
}

deleteTask(id) {
   this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
   this.taskDoc.delete();
} 


}
