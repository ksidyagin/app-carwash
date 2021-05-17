import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashesComponent } from './carwashes.component';

describe('CarwashesComponent', () => {
  let component: CarwashesComponent;
  let fixture: ComponentFixture<CarwashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
