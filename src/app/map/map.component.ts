import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

export interface Item {
  text: string;
  color: string;
  size: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  newText: string;
  newColor: string;
  newSize: string;
  selectedSize: string;
  selectedColor: string;
  items$: Observable<Item[]>;
  sizeFilter$: BehaviorSubject<string | null>;
  colorFilter$: BehaviorSubject<string | null>;
  itemCollectionRef: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemCollectionRef = this.afs.collection<Item>('items');
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.items$ = Observable.combineLatest(
      this.sizeFilter$,
      this.colorFilter$
    ).switchMap(([size, color]) =>
      afs
        .collection<Item>('items', ref => {
          let query:
            | firebase.firestore.CollectionReference
            | firebase.firestore.Query = ref;
          if (size) {
            query = query.where('size', '==', size);
          }
          if (color) {
            query = query.where('color', '==', color);
          }
          return query;
        })
        .valueChanges()
    );
  }
  filterBySize(size: string | null) {
    this.sizeFilter$.next(size);
  }
  filterByColor(color: string | null) {
    this.colorFilter$.next(color);
  }

  ngOnInit() {
  }

  submitFilterByColor() {
    this.selectedColor = document.getElementById('selectedColor').value;
    this.filterByColor(this.selectedColor);
    this.selectedColor = null;
  }
  submitFilterBySize() {
    this.selectedSize = document.getElementById('selectedSize').value;
    this.filterBySize(this.selectedSize);
    this.selectedSize = null;
  }

  

  addListItem() {
    let desc = document.getElementById('desc').value;
    let col = document.getElementById('col').value;
    let siz = document.getElementById('size').value;
    this.newText = desc;
    this.newColor = col;
    this.newSize = siz;
    this.itemCollectionRef.add({ text: this.newText, color: this.newColor, size: this.newSize });
    desc = null;
    col = null;
    siz = null;
    event.preventDefault();
  }
}