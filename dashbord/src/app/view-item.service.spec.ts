import { TestBed } from '@angular/core/testing';

import { ViewItemService } from './view-item.service';

describe('ViewItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewItemService = TestBed.get(ViewItemService);
    expect(service).toBeTruthy();
  });
});
