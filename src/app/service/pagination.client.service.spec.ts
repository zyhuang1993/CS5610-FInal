import { TestBed } from '@angular/core/testing';

import { Pagination.ClientService } from './pagination.client.service';

describe('Pagination.ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Pagination.ClientService = TestBed.get(Pagination.ClientService);
    expect(service).toBeTruthy();
  });
});
