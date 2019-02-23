import { TestBed } from '@angular/core/testing';

import { DmuDetailsAddService } from './dmu-details-add.service';

describe('DmuDetailsAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmuDetailsAddService = TestBed.get(DmuDetailsAddService);
    expect(service).toBeTruthy();
  });
});
