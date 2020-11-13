import { TestBed } from '@angular/core/testing';

import { NavbarCoordinatorService } from './navbar-coordinator.service';

describe('NavbarCoordinatorService', () => {
  let service: NavbarCoordinatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarCoordinatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
