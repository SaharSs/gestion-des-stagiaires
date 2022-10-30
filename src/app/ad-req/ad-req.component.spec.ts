import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdReqComponent } from './ad-req.component';

describe('AdReqComponent', () => {
  let component: AdReqComponent;
  let fixture: ComponentFixture<AdReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
