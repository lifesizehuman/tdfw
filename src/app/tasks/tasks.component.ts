import { Component, OnInit } from "@angular/core";
import { ManagerService } from "../manager.service";
import { config } from "../app.config";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";

import { Observable } from "rxjs/Observable";

export interface Task {
  id?: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  taskCollectionRef: AngularFirestoreCollection<Task>;
  task$: Observable<any[]>;
  myTask: string;
  editMode: boolean;
  taskToComplete: any = {};

  constructor(
    public afs: AngularFirestore,
    private managerService: ManagerService
  ) {
    this.taskCollectionRef = this.afs.collection<Task>("tasks");
    this.task$ = this.taskCollectionRef.valueChanges();
    this.task$.subscribe(data => console.log(data));
  }

  completeTask(task) {
    const taskId = task.id;
    this.managerService.completeTask(taskId);
  } 

  saveTask() {
    this.myTask = document.getElementById('myTask').value;
      const task = {
         description: this.myTask,
         completed: false
      };
      this.managerService.addTask(task);
      this.myTask = '';
      event.preventDefault();
   }

deleteTask(task) {
   const taskId = task.id;
   this.managerService.deleteTask(taskId);
} 

  ngOnInit() {
    this.task$ = this.afs
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Task;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }
}
