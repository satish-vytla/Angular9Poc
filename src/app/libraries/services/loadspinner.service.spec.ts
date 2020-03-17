import { TestBed } from '@angular/core/testing';

import { LoadSpinnerService } from './loadspinner.service';

describe('LoadSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadSpinnerService = TestBed.get(LoadSpinnerService);
    expect(service).toBeTruthy();
  });
});
