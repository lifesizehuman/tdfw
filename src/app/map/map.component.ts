import { Component, OnInit } from '@angular/core';
const firebase = require('firebase');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string;
  lat: number;
  lng: number;

  constructor() {
    this.title = 'string';
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ngOnInit () {

    const config = {
      apiKey: 'AIzaSyAqMI1aab7fpTQsdo7zUXnXAhnIwVTdBAs',
      authDomain: 'turn-down-for-whales.firebaseapp.com',
      databaseURL: 'https://turn-down-for-whales.firebaseio.com',
      projectId: 'turn-down-for-whales',
      storageBucket: 'turn-down-for-whales.appspot.com',
      messagingSenderId: '612763934802'
    };
    firebase.initializeApp(config);

    const database = firebase.database();

    database.ref('/sightings').limitToLast(5).on('child_added', function(childSnapshot, prevChildKey) {

        console.log(childSnapshot.val());
    });
  }
}
