import { TestBed } from '@angular/core/testing';

import { ClientDetailsUpdateService } from './client-details-update.service';

describe('ClientDetailsUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDetailsUpdateService = TestBed.get(ClientDetailsUpdateService);
    expect(service).toBeTruthy();
  });
});
