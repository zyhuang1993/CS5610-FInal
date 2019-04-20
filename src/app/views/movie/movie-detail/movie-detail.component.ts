import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  dbId: number;
  movieInMongo: any;
  loggedIn: boolean;
  averageRate: string;
  reviews: [any];
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService, private router: Router) {
    this.loggedIn = true;
    this.movie = '';
  }

  ngOnInit() {
    if (this.sharedService.user !== null) {
      this.loggedIn = true;
    }
    this.activatedRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      this.movieService.findMovieByDbId(this.dbId).subscribe((movie: any) => {
        this.movieInMongo = movie;
        if (this.movieInMongo === null) {
           this.addToDatabase(movie);
        } else  {
          this.reviews = this.movieInMongo.reviews;
          this.averageRate = this.getAverageScore(this.reviews);
        }
      });
      this.movieService.findMovieDetailsById(this.dbId).subscribe((movie) => {
        this.movie = movie;
        if (this.movieInMongo === null || this.movieInMongo === undefined) {
          this.addToDatabase(this.movie);
        }
      });
    });
  }

  getImageUrlForAMovie(url) {
    if (url) {
      return 'https://image.tmdb.org/t/p/original' + url;
    }
  }

  addToFavorite() {
  // add this.movieInMongo as favorite;
  }

  addToDatabase(movie) {
    const newMovie = {
        title: this.movie.original_title,
        rate: undefined,
        db_id: this.dbId,
        reviews: [],
        release_date: this.movie.release_date,
        overview: this.movie.overview,
        poster_path: this.movie.poster_path
      };
    this.movieService.createMovie(newMovie).subscribe((data) => {
      this.movieInMongo = data;
      this.reviews = this.movieInMongo.reviews;
      this.averageRate = this.getAverageScore(this.reviews);
    });
  }

  navigateToReview() {
      this.router.navigate(['/movie/:dbID/review-new']);
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
    return rate.toFixed(1);
  }
}
