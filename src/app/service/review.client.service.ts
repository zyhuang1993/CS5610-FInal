import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  createReview(dbId, review) {
    const url = this.baseUrl + '/api/' + dbId + '/review';
    return this.http.post(url, review);
  }

  deleteReview(reviewId) {
    const url = this.baseUrl + '/api/review/' + reviewId;
    return this.http.delete(url);
  }

  incrementReviewLikes(review) {
    const url = this.baseUrl + '/api/review/' + review._id + '/increaseLikes';
    return this.http.put(url, '');
  }

  decrementReviewLikes(review) {
    const url = this.baseUrl + '/api/review/' + review._id + '/decreaseLikes';
    return this.http.put(url, '');
  }



}
