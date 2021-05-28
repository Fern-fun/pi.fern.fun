import { TestBed } from '@angular/core/testing';

import { ApiCommService } from './api-comm.service';

describe('ApiCommService', () => {
  let service: ApiCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
