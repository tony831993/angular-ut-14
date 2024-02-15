import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { EventTestComponent } from './component/event-test/event-test.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'event-test', component: EventTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
