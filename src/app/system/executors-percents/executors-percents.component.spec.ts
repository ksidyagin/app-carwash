import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorsPercentsComponent } from './executors-percents.component';

describe('ExecutorsPercentsComponent', () => {
  let component: ExecutorsPercentsComponent;
  let fixture: ComponentFixture<ExecutorsPercentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutorsPercentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorsPercentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
