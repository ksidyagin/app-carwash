import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySmsComponent } from './history-sms.component';

describe('HistorySmsComponent', () => {
  let component: HistorySmsComponent;
  let fixture: ComponentFixture<HistorySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
