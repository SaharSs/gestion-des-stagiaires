import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpTuComponent } from './up-tu.component';

describe('UpTuComponent', () => {
  let component: UpTuComponent;
  let fixture: ComponentFixture<UpTuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpTuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
