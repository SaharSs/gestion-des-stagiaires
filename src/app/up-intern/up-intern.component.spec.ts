import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpInternComponent } from './up-intern.component';

describe('UpInternComponent', () => {
  let component: UpInternComponent;
  let fixture: ComponentFixture<UpInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
