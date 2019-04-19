import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.client.service';

describe('Review.ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewService = TestBed.get(ReviewService);
    expect(service).toBeTruthy();
  });
});
