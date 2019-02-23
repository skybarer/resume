import { TestBed } from '@angular/core/testing';

import { SowPessSearchService } from './sow-pess-search.service';

describe('SowPessSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SowPessSearchService = TestBed.get(SowPessSearchService);
    expect(service).toBeTruthy();
  });
});
