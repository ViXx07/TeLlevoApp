import { TestBed } from '@angular/core/testing';

import { CrudChoferService } from './crud-chofer.service';

describe('CrudChoferService', () => {
  let service: CrudChoferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudChoferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
