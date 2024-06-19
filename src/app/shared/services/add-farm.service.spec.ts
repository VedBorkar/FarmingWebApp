import { TestBed } from '@angular/core/testing';

import { AddFarmService } from './add-farm.service';

describe('AddFarmService', () => {
  let service: AddFarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
