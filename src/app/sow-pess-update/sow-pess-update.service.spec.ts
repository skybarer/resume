import { TestBed } from '@angular/core/testing';

import { SowPessUpdateService } from './sow-pess-update.service';

describe('SowPessUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SowPessUpdateService = TestBed.get(SowPessUpdateService);
    expect(service).toBeTruthy();
  });
});
