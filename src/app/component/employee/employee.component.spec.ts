import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthenticationService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2');
    fixture.detectChanges();
  });

  it('Should Create Employee Component', () => {
    expect(component).toBeTruthy();
  });

  it('Method getSalaraySlip(): Should call AuthenticationService method checkAuthentication() and should return a value "Salary Slip"', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    const salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('Should assert value of "h2" element to be value of component.salSlip', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h2.textContent).toBe(component.salSlip);
  });

});
