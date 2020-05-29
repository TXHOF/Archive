import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UuidSearchComponent } from './uuid-search.component';

describe('UuidSearchComponent', () => {
  let component: UuidSearchComponent;
  let fixture: ComponentFixture<UuidSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UuidSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UuidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
