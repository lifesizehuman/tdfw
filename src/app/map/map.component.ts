import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/combineLatest";
import { DetailsComponent } from "../details/details.component";
import { FirebaseApp } from "angularfire2";
import { query } from "@angular/core/src/animation/dsl";

export interface Item {
  id?: any;
  text: string;
  color: string;
  size: string;
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent {
  itemCollectionRef: AngularFirestoreCollection<Item>;
  item$: Observable<Item[]>;

  // private itemDoc: AngularFirestoreDocument<Item>;
  // itemId: any;
  // itemsRef: any;
  newText: string;
  newColor: string;
  newSize: string;
  selectedSize: string;
  selectedColor: string;
  // items$: Observable<Item[]>;
  sizeFilter$: BehaviorSubject<string | null>;
  colorFilter$: BehaviorSubject<string | null>;
  // id: any;
  // itemCollectionRef: AngularFirestoreCollection<Item>;

  constructor(
    private afs: AngularFirestore,
    private detailsModal: DetailsComponent
    // private id: any
  ) {

    this.itemCollectionRef = this.afs.collection<Item>("items");
    this.item$ = this.itemCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Item;
        const id = action.payload.doc.id;
        // this.id = id;
        return { id, ...data };
      });
    });
    // this.itemDoc = afs.doc<Item>("items/a");
    // this.itemCollectionRef = this.afs.collection<Item>("items");
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    // this.items$ = Observable.combineLatest(
    //   this.sizeFilter$,
    //   this.colorFilter$
    // ).switchMap(([size, color]) =>
    //   afs
    //     .collection<Item>("items", ref => {
    //       let query:
    //         | firebase.firestore.CollectionReference
    //         | firebase.firestore.Query = ref;
    //       if (size) {
    //         query = query.where("size", "==", size);
    //       }
    //       if (color) {
    //         query = query.where("color", "==", color);
    //       }
    //       return query;
    //     })
    //     .valueChanges()
    // );
  }
  // filterBySize(size: string | null) {
  //   this.sizeFilter$.next(size);
  // }
  // filterByColor(color: string | null) {
  //   this.colorFilter$.next(color);
  // }

  submitFilterByColor() {
    this.selectedColor = document.getElementById("selectedColor").value;
    this.filterByColor(this.selectedColor);
    this.selectedColor = null;
  }
  submitFilterBySize() {
    this.selectedSize = document.getElementById("selectedSize").value;
    this.filterBySize(this.selectedSize);
    this.selectedSize = null;
  }

  // viewModal(itemId: any) {
  //   this.detailsModal.openModal(DetailsComponent);
  //   itemId = this.itemId;
  //   console.log(itemId);
  // }

  addListItem() {
    let desc = document.getElementById("desc").value;
    let col = document.getElementById("col").value;
    let siz = document.getElementById("size").value;
    this.newText = desc;
    this.newColor = col;
    this.newSize = siz;
    this.itemCollectionRef.add({
      id: Math.random()
        .toString(36)
        .slice(2),
      text: this.newText,
      color: this.newColor,
      size: this.newSize
    });
    desc = null;
    col = null;
    siz = null;
    event.preventDefault();
  }

  // updateItem(item: Item) {
  //   this.itemCollectionRef.doc(item.id).update({ completed: !todo.completed });
  // }

  deleteItem(item$: Item) {
    console.log(item$.id);
    // this.itemCollectionRef.doc(items$.id).delete();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {}
}
