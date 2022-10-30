import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLevelComponent } from './up-level.component';

describe('UpLevelComponent', () => {
  let component: UpLevelComponent;
  let fixture: ComponentFixture<UpLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
