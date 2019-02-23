import { TestBed } from '@angular/core/testing';

import { CandidateProfileSummaryService } from './candidate-profile-summary.service';

describe('CandidateProfileSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateProfileSummaryService = TestBed.get(CandidateProfileSummaryService);
    expect(service).toBeTruthy();
  });
});
