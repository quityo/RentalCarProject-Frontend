import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPeriodComponent } from './rental-period.component';

describe('RentalPeriodComponent', () => {
  let component: RentalPeriodComponent;
  let fixture: ComponentFixture<RentalPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
