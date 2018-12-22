import { TestBed } from '@angular/core/testing';

import { APIKeyService } from './apikey.service';

describe('APIKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIKeyService = TestBed.get(APIKeyService);
    expect(service).toBeTruthy();
  });
});
