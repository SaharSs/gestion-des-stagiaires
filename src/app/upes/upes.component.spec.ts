import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpesComponent } from './upes.component';

describe('UpesComponent', () => {
  let component: UpesComponent;
  let fixture: ComponentFixture<UpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
