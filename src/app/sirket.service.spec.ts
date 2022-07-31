import { TestBed } from '@angular/core/testing';

import { SirketService } from './sirket.service';

describe('SirketService', () => {
  let service: SirketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SirketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
