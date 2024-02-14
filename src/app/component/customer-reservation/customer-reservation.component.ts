import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.scss']
})
export class CustomerReservationComponent implements OnInit {

  hotelRoomCapacity = 30;
  customerCount = 10;

  constructor() { }

  ngOnInit(): void {
  }

  registerCustomer() {
    return ++this.customerCount;
  }

  unregisterCustomer() {
    return -- this.customerCount;
  }
}
