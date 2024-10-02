import { TestBed } from '@angular/core/testing';

import { CrudViajeService } from './crud-viaje.service';

describe('CrudViajeService', () => {
  let service: CrudViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
