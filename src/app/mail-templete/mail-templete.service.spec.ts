import { TestBed } from '@angular/core/testing';

import { MailTempleteService } from './mail-templete.service';

describe('MailTempleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailTempleteService = TestBed.get(MailTempleteService);
    expect(service).toBeTruthy();
  });
});
