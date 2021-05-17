import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodmenuComponent } from './podmenu.component';

describe('PodmenuComponent', () => {
  let component: PodmenuComponent;
  let fixture: ComponentFixture<PodmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
