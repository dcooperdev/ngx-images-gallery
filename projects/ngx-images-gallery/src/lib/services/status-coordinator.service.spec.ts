import { TestBed } from '@angular/core/testing';

import { StatusCoordinatorService } from './status-coordinator.service';

describe('StatusCoordinatorService', () => {
  let service: StatusCoordinatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusCoordinatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
