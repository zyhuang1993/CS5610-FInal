import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {ReviewService} from '../../../service/review.client.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movie: any;
  dbId: string;
  reviews: [any];
  averageRate: number;
  likedReviews: [any];
  curUser: any;
  reviewBetweenScores: number[] = [0, 0, 0, 0, 0];
  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute, private sharedService: SharedService,
              private reviewService: ReviewService) {
   this.curUser = this.sharedService.user;
   this.likedReviews = this.curUser.likedReviews;
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      this.movieService.findMovieByDbId(this.dbId).subscribe((data) => {
        this.movie = data;
        this.reviews = this.movie.reviews;
        this.averageRate = this.getAverageScore(this.reviews);
        this.reviewBetweenScores = this.reviewCountsBetween(this.reviews);
        for (let i = 0; i < this.reviews.length; i++) {
          for (let j = 0; j < this.likedReviews.length; j++) {
            if (this.likedReviews[i].equals(this.reviews[i]._id)) {
              this.reviews[i].likeStatus = 'Unlike';
            }
          }
        }
      });
    });
  }


  getReviewer() {

  }

   getAverageScore(reviews) {
    if (reviews === null || reviews.length === 0) {
      return null;
    }
    let sum = 0;
    for (const review of reviews) {
      sum += review.rate;
    }
    const rate: number = sum / reviews.length;
    return Number(rate.toFixed(1));
  }

    reviewCountsBetween(reviews): number[] {
    const stats = [0, 0, 0, 0, 0];
    for (const review of reviews) {
      const rate = review.rate;
      if (rate > 0 && rate <= 1) {
        stats[0]++;
      } else if (rate > 1 && rate <= 2) {
        stats[1]++;
      } else if (rate > 2 && rate <= 3) {
        stats[2]++;
      } else if (rate > 3 && rate <= 4) {
        stats[3]++;
      } else if (rate > 4 && rate <= 5) {
        stats[4]++;
      }
      }
    return stats;
    }

    getWidth(reviews, stats, i) {
    if (reviews === null || reviews.length === 0) {
      return '0';
    } else {
      return stats[i] / reviews.length + '%';
    }
    }

    // need user back-end
    like(review) {
      this.reviewService.incrementReviewLikes(review).subscribe((data) => {
        review.likeStatus = 'like';
      });
    }

    unlike(review) {
      this.reviewService.decrementReviewLikes(review).subscribe((data) => {
        review.likeStatus = 'unlike';
      });
    }
}
