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
  movie: any = null;
  dbId: number;
  movieInMongo: any;
  averageRate: string;
  reviews: [any];
  favoriteStatus = 'Favorite';
  noReview: boolean = true;
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
          if (this.currUser.favorite[i].db_id === this.dbId.toString()) {
            this.favoriteStatus = 'Unfavorite';
            break;
          }
        }
      }

      this.movieService.findMovieDetailsById(this.dbId).subscribe((movie) => {
        this.movie = movie;
        this.movieService.findMovieByDbId(this.dbId).subscribe((res: any) => {
          this.movieInMongo = res;
          console.log(res);
          if (this.movieInMongo === null) {
            if (this.movie !== null) {
              this.addToDatabase();
            }
          } else  {
            this.reviews = this.movieInMongo.reviews;
            this.averageRate = this.getAverageScore(this.reviews);
            for (let i = 0; i < this.reviews.length; i++) {
              if (this.reviews[i].reviewer === this.currUser._id) {
                this.noReview = false;
                break;
              }
            }
          }
        });
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
      }
    );
    alert('Add to favorite list successfully');
  }

  deleteFavorite() {
    this.userService.deleteFavorite(this.currUser._id, this.movieInMongo._id).subscribe(
      (data) => {
        this.favoriteStatus = 'Favorite';
      }
    );
    alert('Remove movie from favorite list successfully');
  }

  addToDatabase() {
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
      this.router.navigate(['/movie/' + this.dbId.toString() + '/review-new']);
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
