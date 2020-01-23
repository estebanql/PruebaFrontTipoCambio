import { TestBed } from '@angular/core/testing';

import { TipocambioService } from './tipocambio.service';

describe('TipocambioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipocambioService = TestBed.get(TipocambioService);
    expect(service).toBeTruthy();
  });
});
