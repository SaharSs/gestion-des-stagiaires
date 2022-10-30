import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpReqComponent } from './up-req.component';

describe('UpReqComponent', () => {
  let component: UpReqComponent;
  let fixture: ComponentFixture<UpReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
