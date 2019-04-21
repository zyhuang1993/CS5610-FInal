import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {ReviewService} from '../../../service/review.client.service';
import {UserService} from '../../../service/user.client.service';

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
  currUser: any;
  reviewBetweenScores: number[] = [0, 0, 0, 0, 0];
  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute, private sharedService: SharedService,
              private reviewService: ReviewService, private userService: UserService, private router: Router) {
    this.activateRoute.queryParamMap.subscribe(params => {
      if (params.get('refresh')) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = user;
          this.likedReviews = user.likedReview;
          this.movieService.findMovieByDbId(this.dbId).subscribe((data) => {
            this.movie = data;
            this.reviews = this.movie.reviews;
            this.averageRate = this.getAverageScore(this.reviews);
            this.reviewBetweenScores = this.reviewCountsBetween(this.reviews);
            for (let i = 0; i < this.reviews.length; i++) {
              for (let j = 0; j < this.likedReviews.length; j++) {
                if (this.likedReviews[j] === this.reviews[i]._id) {
                  this.reviews[i].likeStatus = 'Unlike';
                }
              }
            }
          });
        }
      );
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

  likeReview(review) {
    this.reviewService.incrementReviewLikes(review).subscribe((data: any) => {
      this.userService.likeReview(this.currUser._id, review._id).subscribe((res) => {
        this.router.navigate(['/movie/' + this.dbId + '/reviews'], {queryParams: {refresh: new Date().getTime()}
        });
      });
    });
  }

  unlikeReview(review) {
    this.reviewService.decrementReviewLikes(review).subscribe((data: any) => {
      this.userService.unlikeReview(this.currUser._id, review._id).subscribe((res) => {
        this.router.navigate(['/movie/' + this.dbId + '/reviews'], {queryParams: {refresh: new Date().getTime()}
        });
      });
    });
  }

  deleteReview(reviewId: string) {
    this.reviewService.deleteReview(reviewId).subscribe((data: any) => {
      this.userService.deleteReview(this.currUser._id, reviewId).subscribe(
        (res) => {
          this.router.navigate(['/movie/' + this.dbId + '/reviews'],{queryParams: {refresh: new Date().getTime()}
          });
        }
      );
    });
  }

  owner(username: string) {
    if (this.currUser.username === username) {
      return true;
    } else {
      return false;
    }
  }

  like(status) {
    if (status === 'Like') {
      return true;
    } else {
      return false;
    }
  }

  admin() {
    if (this.currUser.type === 'Admin') {
      return true;
    } else {
      return false;
    }
  }
}
