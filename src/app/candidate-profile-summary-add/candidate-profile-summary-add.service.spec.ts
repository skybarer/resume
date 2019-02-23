import { TestBed } from '@angular/core/testing';

import { CandidateProfileSummaryAddService } from './candidate-profile-summary-add.service';

describe('CandidateProfileSummaryAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateProfileSummaryAddService = TestBed.get(CandidateProfileSummaryAddService);
    expect(service).toBeTruthy();
  });
});
