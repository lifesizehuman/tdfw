import { Component, TemplateRef } from '@angular/core';
import {
  BsModalService,
  ModalDirective,
  BsModalRef
} from 'ngx-bootstrap/modal';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { FirebaseApp } from 'angularfire2';
import { query } from '@angular/core/src/animation/dsl';

export interface Item {
  id: any;
  text: string;
  color: string;
  size: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  bsModalRef: BsModalRef;
  items$: Observable<Item[]>;
  itemCollectionRef: AngularFirestoreCollection<Item>;
  constructor(
    public afs: AngularFirestore,
    public modalService: BsModalService
  ) {
    this.itemCollectionRef = this.afs.collection<Item>('items');
    this.items$ = this.itemCollectionRef.valueChanges();

  }

  openModal(template: DetailsComponent) {
    this.bsModalRef = this.modalService.show(template);
    const items$ = this.afs
      .collection<Item>('items', ref => {
        const query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;

        return query;
      })
      .valueChanges();

    items$.subscribe(queriedItems => {
      console.log(queriedItems);
      
    });
  }

 
  closeModal() {
    this.modalService.hide(1);
  }
}
