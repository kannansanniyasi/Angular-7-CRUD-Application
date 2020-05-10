import { TestBed } from '@angular/core/testing';

import { PhpServiceService } from './php-service.service';

describe('PhpServiceService', () => {
  let service: PhpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
