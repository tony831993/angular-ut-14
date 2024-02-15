import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerReservationComponent } from './component/customer-reservation/customer-reservation.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EventTestComponent } from './component/event-test/event-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerReservationComponent,
    EmployeeComponent,
    EventTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
