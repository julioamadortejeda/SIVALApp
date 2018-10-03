import { TestBed } from '@angular/core/testing';

import { FoliosdpService } from './foliosdp.service';

describe('FoliosdpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoliosdpService = TestBed.get(FoliosdpService);
    expect(service).toBeTruthy();
  });
});
