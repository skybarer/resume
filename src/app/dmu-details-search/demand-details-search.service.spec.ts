import { TestBed } from '@angular/core/testing';

import { DemandDetailsSearchService } from './demand-details-search.service';

describe('DemandDetailsSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandDetailsSearchService = TestBed.get(DemandDetailsSearchService);
    expect(service).toBeTruthy();
  });
});
