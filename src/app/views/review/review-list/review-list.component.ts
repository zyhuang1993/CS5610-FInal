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
  like: string;
  reviewerLink = '';
  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      this.movieService.findMovieByDbId(this.dbId).subscribe((data) => {
        this.movie = data;
        this.reviews = this.movie.reviews;
      });
    });
  }

  likeReview() {
    if (this.like === 'Like') {
      this.like = 'Unlike';
    } else if (this.like === 'Unlike') {
      this.like = 'Like';
    }
  }
  getReviewer() {

  }
}
