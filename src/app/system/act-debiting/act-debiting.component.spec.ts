import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDebitingComponent } from './act-debiting.component';

describe('ActDebitingComponent', () => {
  let component: ActDebitingComponent;
  let fixture: ComponentFixture<ActDebitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActDebitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDebitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
