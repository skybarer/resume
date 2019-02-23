import { TestBed } from '@angular/core/testing';

import { GetResumeService } from './get-resume.service';

describe('GetResumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetResumeService = TestBed.get(GetResumeService);
    expect(service).toBeTruthy();
  });
});
