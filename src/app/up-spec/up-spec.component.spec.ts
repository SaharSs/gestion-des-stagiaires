import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpSpecComponent } from './up-spec.component';

describe('UpSpecComponent', () => {
  let component: UpSpecComponent;
  let fixture: ComponentFixture<UpSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpSpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
