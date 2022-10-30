import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbComponent } from './nb.component';

describe('NbComponent', () => {
  let component: NbComponent;
  let fixture: ComponentFixture<NbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
