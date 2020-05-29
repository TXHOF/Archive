import { TestBed } from '@angular/core/testing';

import { UuidServService } from './uuid-serv.service';

describe('UuidServService', () => {
  let service: UuidServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UuidServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
