import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdInternComponent } from './ad-intern.component';

describe('AdInternComponent', () => {
  let component: AdInternComponent;
  let fixture: ComponentFixture<AdInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
