import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-jumbo",
  templateUrl: "./jumbo.component.html",
  styleUrls: ["./jumbo.component.css"]
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
    const main = document.getElementById("main");

    if (now < 6) {
      main.classList.add("night");
    } else if (now >= 6 && now < 12) {
      main.classList.add("morning");
    } else if (now >= 12 && now < 18) {
      main.classList.add("noon");
    } else if (now >= 18 && now < 20) {
      main.classList.add("evening");
    } else if (now >= 20 && now <= 23) {
      main.classList.add("night");
    }
  }
}
