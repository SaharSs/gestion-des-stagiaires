import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAbsenceComponent } from './ad-absence.component';

describe('AdAbsenceComponent', () => {
  let component: AdAbsenceComponent;
  let fixture: ComponentFixture<AdAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
