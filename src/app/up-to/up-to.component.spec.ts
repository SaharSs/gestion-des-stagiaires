import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpToComponent } from './up-to.component';

describe('UpToComponent', () => {
  let component: UpToComponent;
  let fixture: ComponentFixture<UpToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
