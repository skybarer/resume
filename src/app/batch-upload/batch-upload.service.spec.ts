import { TestBed } from '@angular/core/testing';

import { BatchUploadService } from './batch-upload.service';

describe('BatchUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchUploadService = TestBed.get(BatchUploadService);
    expect(service).toBeTruthy();
  });
});
