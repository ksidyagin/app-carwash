import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWorkersComponent } from './menu-workers.component';

describe('MenuWorkersComponent', () => {
  let component: MenuWorkersComponent;
  let fixture: ComponentFixture<MenuWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
