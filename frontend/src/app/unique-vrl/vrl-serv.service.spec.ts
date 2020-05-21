import { TestBed } from '@angular/core/testing';

import { VrlServService } from './vrl-serv.service';

describe('VrlServService', () => {
  let service: VrlServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrlServService);
  });

  it('should be created', () => {
	//const service: VrlServService = TestBed.get(VrlServService);
    expect(service).toBeTruthy();
  });
});
