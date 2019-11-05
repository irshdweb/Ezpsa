import { TestBed } from '@angular/core/testing';

import { ColsetService } from './colset.service';

describe('ColsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColsetService = TestBed.get(ColsetService);
    expect(service).toBeTruthy();
  });
});
