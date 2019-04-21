import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {ReviewService} from '../../../service/review.client.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  reviews: [any];
  reviewerLink = '';
  reviewsLiked: [any];
  currUser: any;
  otherUser: any;
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute, private reviewService: ReviewService) {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('refresh')) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = user;
          this.reviewsLiked = user.likedReview;
          this.userService.findUserByUserName(params['username']).subscribe(
            (user: any) => {
              this.otherUser = user;
              this.reviews = user.reviews;
              for (let i = 0; i < this.reviews.length; i++) {
                for (let j = 0; j < this.reviewsLiked.length; j++) {
                  if (this.reviewsLiked[j] === this.reviews[i]._id) {
                    this.reviews[i].likeStatus = 'Unlike';
                  }
                }
              }
            }
          );
        }
      );
    });
  }

  getImageUrlForAMovie(url) {
    if (url) {
      return 'https://image.tmdb.org/t/p/original' + url;
    }
  }

  deleteReview(reviewId: string) {
    this.reviewService.deleteReview(reviewId).subscribe((data: any) => {
      this.userService.deleteReview(this.currUser._id, reviewId).subscribe(
        (res) => {
          this.router.navigate(['/user/' + this.otherUser.username + '/review-list'], {queryParams: {refresh: new Date().getTime()}
          });
        }
      );
    });
  }

  likeReview(review) {
    this.reviewService.incrementReviewLikes(review).subscribe((data: any) => {
      this.userService.likeReview(this.currUser._id, review._id).subscribe((res) => {
        this.router.navigate(['/user/' + this.otherUser.username + '/review-list'], {
          queryParams: {refresh: new Date().getTime()}
        });
      });
    });
  }

  unlikeReview(review) {
    this.reviewService.decrementReviewLikes(review).subscribe((data: any) => {
      this.userService.unlikeReview(this.currUser._id, review._id).subscribe((res) => {
        this.router.navigate(['/user/' + this.otherUser.username + '/review-list'], {
          queryParams: {refresh: new Date().getTime()}
        });
      });
    });
  }

  owner() {
    if (this.currUser.username === this.otherUser.username) {
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
}
