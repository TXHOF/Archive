import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock404Component } from './mock404.component';

describe('Mock404Component', () => {
  let component: Mock404Component;
  let fixture: ComponentFixture<Mock404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mock404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mock404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
