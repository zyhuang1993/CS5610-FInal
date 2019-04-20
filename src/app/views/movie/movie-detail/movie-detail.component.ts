import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {UserService} from '../../../service/user.client.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  currUser: any = null;
  movie: any;
  dbId: number;
  movieInMongo: any;
  averageRate: string;
  reviews: [any];
  favoriteStatus = 'Favorite';
  constructor(private movieService: MovieService, private userService: UserService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService, private router: Router) {
    this.movie = '';
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('refresh')) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      if (this.sharedService.user !== null) {
        this.currUser = this.sharedService.user;
        for (let i = 0; i < this.currUser.favorite.length; i++) {
          if (this.currUser.favorite[i].db_id === this.dbId) {
            this.favoriteStatus = 'Unfavorite';
            break;
          }
        }
      }

      this.movieService.findMovieByDbId(this.dbId).subscribe((movie: any) => {
        this.movieInMongo = movie;
        if (this.movieInMongo === null) {
           this.addToDatabase(movie);
        } else  {
          this.reviews = this.movieInMongo.reviews;
          this.averageRate = this.getAverageScore(this.reviews);
          if (this.sharedService.user !== null) {
            for (let i = 0; i < this.currUser.favorite.length; i++) {
            if (this.currUser.favorite[i]._id.equals(this.movieInMongo._id)) {
              this.favoriteStatus = 'Unfavorite';
              break;
            }
          }
          }

        }
      });

      this.movieService.findMovieDetailsById(this.dbId).subscribe((movie) => {
        this.movie = movie;
        // if (this.movieInMongo === null || this.movieInMongo === undefined) {
        //   this.addToDatabase(this.movie);
        // }
      });
    });
  }

  getImageUrlForAMovie(url) {
    if (url) {
      return 'https://image.tmdb.org/t/p/original' + url;
    }
  }

  addToFavorite() {
    this.userService.addToFavorite(this.currUser._id, this.movieInMongo._id).subscribe(
      (data) => {
        this.favoriteStatus = 'Unfavorite';
        // this.router.navigate(['/movie/' + this.dbId.toString()], {
        //   queryParams: {refresh: new Date().getTime()}
        // });
      }
    );
    alert('Add to favorite list successfully');
  }

  deleteFavorite() {
    this.userService.deleteFavorite(this.currUser._id, this.movieInMongo._id).subscribe(
      (data) => {
        this.favoriteStatus = 'Favorite';
        // this.router.navigate(['/movie/' + this.dbId.toString()], {
        //   queryParams: {refresh: new Date().getTime()}
        // });
      }
    );
    alert('Remove movie from favorite list successfully');
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

  judge() {
    if (this.favoriteStatus === 'Favorite') {
      return true;
    } else {
      return false;
    }
  }
}
