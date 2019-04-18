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
  trails: any;
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private sharedService: SharedService, private router: Router) {
    this.loggedIn = true;
    this.movie = '';
    this.trails = '';
  }

  ngOnInit() {
    if (this.sharedService.user !== null) {
      this.loggedIn = true;
    }
    this.activatedRoute.params.subscribe((params) => {
      this.dbId = params.dbId;
      this.movieService.findTrailsById(this.dbId).subscribe((trails: any) => {
        this.trails = trails.results;
      });
      this.movieService.findMovieByDbId(this.dbId).subscribe((movie: any) => {
        this.movieInMongo = movie;
      });
      this.movieService.findMovieDetailsById(this.dbId).subscribe((movie) => {
        this.movie = movie;
      });
    });
  }

  getImageUrlForAMovie(url) {
    if (url) {
      return 'https://image.tmdb.org/t/p/original' + url;
    }
  }


  getTrailUrl(key) {
    return 'https://www.youtube.com/embed/' + key;
  }

  navigateToReview() {
    if (this.movieInMongo) {
      this.router.navigate(['/movie/:dbID/review-new']);
    } else {
      const newMovie = {
        title: this.movie.original_title,
        rate: undefined,
        db_id: this.dbId,
        reviews: []
      };
      console.log(newMovie);
      this.movieService.createMovie(newMovie).subscribe((data) => {
        this.movieInMongo = data;
        this.router.navigate(['/movie/:dbID/review-new']);
      });
    }
  }
}
