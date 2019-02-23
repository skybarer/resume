import { TestBed } from '@angular/core/testing';

import { ClientDetailsListService } from './client-details-list.service';

describe('ClientDetailsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDetailsListService = TestBed.get(ClientDetailsListService);
    expect(service).toBeTruthy();
  });
});
