import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishMoreInformationComponent } from './dish-more-information.component';

describe('DishMoreInformationComponent', () => {
  let component: DishMoreInformationComponent;
  let fixture: ComponentFixture<DishMoreInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishMoreInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishMoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
