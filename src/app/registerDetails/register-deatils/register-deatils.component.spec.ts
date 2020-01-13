import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeatilsComponent } from './register-deatils.component';

describe('RegisterDeatilsComponent', () => {
  let component: RegisterDeatilsComponent;
  let fixture: ComponentFixture<RegisterDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
