import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersTwoComponent } from './workers-two.component';

describe('WorkersTwoComponent', () => {
  let component: WorkersTwoComponent;
  let fixture: ComponentFixture<WorkersTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
