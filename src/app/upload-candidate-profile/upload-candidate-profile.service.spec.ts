import { TestBed } from '@angular/core/testing';

import { UploadCandidateProfileService } from './upload-candidate-profile.service';

describe('UploadCandidateProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadCandidateProfileService = TestBed.get(UploadCandidateProfileService);
    expect(service).toBeTruthy();
  });
});
