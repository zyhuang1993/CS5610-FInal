import { TestBed } from '@angular/core/testing';

import { Movie.Service.ClientService } from './movie.service.client.service';

describe('Movie.Service.ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Movie.Service.ClientService = TestBed.get(Movie.Service.ClientService);
    expect(service).toBeTruthy();
  });
});
