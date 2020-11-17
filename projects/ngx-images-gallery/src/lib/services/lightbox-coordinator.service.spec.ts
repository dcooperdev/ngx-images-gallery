import { TestBed } from '@angular/core/testing';

import { LightboxCoordinatorService } from './lightbox-coordinator.service';

describe('LightboxCoordinatorService', () => {
  let service: LightboxCoordinatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightboxCoordinatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
