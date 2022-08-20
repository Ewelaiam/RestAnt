import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesMenuComponent } from './dishes-menu.component';

describe('DishesOnMenuComponent', () => {
  let component: DishesMenuComponent;
  let fixture: ComponentFixture<DishesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
