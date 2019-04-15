import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.client.service';

describe('Movie.Service.ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
