import { TestBed } from '@angular/core/testing';

import { ConfianceService } from './confiance.service';

describe('ConfianceService', () => {
  let service: ConfianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
