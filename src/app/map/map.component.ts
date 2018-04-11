import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  title: string;
  lat: number;
  lng: number;

  constructor() {
    this.title = "string";
    this.lat = 51.678418;
    this.lng = 7.809007;
  } 
  ngOnInit () {}
}
