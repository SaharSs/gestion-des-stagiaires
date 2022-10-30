import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipRComponent } from './internship-r.component';

describe('InternshipRComponent', () => {
  let component: InternshipRComponent;
  let fixture: ComponentFixture<InternshipRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
