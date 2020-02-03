import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttenfanceComponent } from './employee-attenfance.component';

describe('EmployeeAttenfanceComponent', () => {
  let component: EmployeeAttenfanceComponent;
  let fixture: ComponentFixture<EmployeeAttenfanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAttenfanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAttenfanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
