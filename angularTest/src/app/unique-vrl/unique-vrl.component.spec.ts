import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVRLComponent } from './unique-vrl.component';

describe('UniqueVRLComponent', () => {
  let component: UniqueVRLComponent;
  let fixture: ComponentFixture<UniqueVRLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueVRLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueVRLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
