import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute} from '@angular/router';
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
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
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
    } else {
      return '../../../../assets/images/coming-soon.jpg';
    }
  }

  getRateForAMovie(dbId) {

  }

  getTrailUrl(key) {
    return 'https://www.youtube.com/embed/' + key;
  }
}
