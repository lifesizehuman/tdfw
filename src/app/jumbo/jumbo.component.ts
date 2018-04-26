import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.css']
})
export class JumboComponent implements OnInit {
  time: number = null;

  constructor() {}

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    const hour = new Date();
    this.time = hour.getHours();
    const now = this.time;
    const main = $('#main');

    if (now < 6) {
      main.addClass('night');
    } else if (now >= 6 && now < 12) {
      main.addClass('morning');
    } else if (now >= 12 && now < 18) {
      main.addClass('noon');
    } else if (now >= 18 && now < 20) {
      main.addClass('evening');
    } else {
      main.addClass('night');
    }
  }
}
