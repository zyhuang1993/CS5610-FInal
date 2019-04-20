import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute} from '@angular/router';

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
  reviewBetweenScores: number[] = [0, 0, 0, 0, 0];
  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      this.movieService.findMovieByDbId(this.dbId).subscribe((data) => {
        this.movie = data;
        this.reviews = this.movie.reviews;
        this.averageRate = this.getAverageScore(this.reviews);
        this.reviewBetweenScores = this.reviewCountsBetween(this.reviews);
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
}
