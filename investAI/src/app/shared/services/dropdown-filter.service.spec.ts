import { TestBed } from '@angular/core/testing';

import { DropdownFilterService } from './dropdown-filter.service';

describe('DropdownFilterService', () => {
  let service: DropdownFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
