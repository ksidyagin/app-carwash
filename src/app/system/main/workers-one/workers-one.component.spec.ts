import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersOneComponent } from './workers-one.component';

describe('WorkersOneComponent', () => {
  let component: WorkersOneComponent;
  let fixture: ComponentFixture<WorkersOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
