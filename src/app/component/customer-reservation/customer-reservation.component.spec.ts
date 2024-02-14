import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservationComponent } from './customer-reservation.component';

describe('CustomerReservationComponent', () => {
  let component: CustomerReservationComponent;
  let fixture: ComponentFixture<CustomerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Customer Reservation', () => {
  let customerRev: CustomerReservationComponent;
  
  beforeEach(() => { // Setup : Inititalizing Value
    customerRev = new CustomerReservationComponent;
  });
  afterEach(() => {  // Tear-down: Nullifying values
    customerRev = new CustomerReservationComponent;
  });

  beforeAll(() => {  // Runs once before all the test case run
    
  });
  afterAll(() => {  // Runs once after all the test case run
    
  });

  it('Test case: registerCustomer()', () => {
    let count = customerRev.registerCustomer();
    expect(count).toBe(11);
  });

  it('Test case: unregisterCustomer()', () => {
    let count = customerRev.unregisterCustomer();
    expect(count).toBe(9);
  });
})
