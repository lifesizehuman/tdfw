import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  time: number = null;

  constructor() { }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    const hour = new Date();
    this.time = hour.getHours();
    console.log(this.time);
  }

}
