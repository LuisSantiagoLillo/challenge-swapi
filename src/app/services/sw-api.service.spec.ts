import { TestBed } from '@angular/core/testing';

import { SwApiService } from './sw-api.service';

describe('SwApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwApiService = TestBed.get(SwApiService);
    expect(service).toBeTruthy();
  });
});
