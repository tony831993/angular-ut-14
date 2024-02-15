import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTestComponent } from './event-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should btnAddClick button clicked', () => {
    const h2 = de.query(By.css('h2'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.clickCounter).toEqual(parseInt(h2.nativeElement.innerText));
  });
});
