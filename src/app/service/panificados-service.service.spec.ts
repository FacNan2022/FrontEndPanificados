import { TestBed } from '@angular/core/testing';

import { PanificadosServiceService } from './panificados-service.service';

describe('PanificadosServiceService', () => {
  let service: PanificadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanificadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
