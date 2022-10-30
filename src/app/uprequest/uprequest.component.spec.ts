import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprequestComponent } from './uprequest.component';

describe('UprequestComponent', () => {
  let component: UprequestComponent;
  let fixture: ComponentFixture<UprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UprequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
