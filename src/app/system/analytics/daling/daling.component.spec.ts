import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalingComponent } from './daling.component';

describe('DalingComponent', () => {
  let component: DalingComponent;
  let fixture: ComponentFixture<DalingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
