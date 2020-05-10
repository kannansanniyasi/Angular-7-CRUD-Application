import { TestBed } from '@angular/core/testing';

import { UploadSerService } from './upload-ser.service';

describe('UploadSerService', () => {
  let service: UploadSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
