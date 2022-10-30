import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbsComponent } from './list-abs.component';

describe('ListAbsComponent', () => {
  let component: ListAbsComponent;
  let fixture: ComponentFixture<ListAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
