import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.scss']
})
export class EventTestComponent implements OnInit {

  clickCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addClick() {
    this.clickCounter++;
  }

  removeClick() {
    if (this.clickCounter > 0) {
      this.clickCounter--;
    }
  }

}
