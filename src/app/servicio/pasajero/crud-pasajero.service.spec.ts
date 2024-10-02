import { TestBed } from '@angular/core/testing';

import { CrudPasajeroService } from './crud-pasajero.service';

describe('CrudPasajeroService', () => {
  let service: CrudPasajeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPasajeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
