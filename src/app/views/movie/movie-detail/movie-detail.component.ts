import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  movieId: number;
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movieId = params.movieId;
      this.movieService.findMovieDetailsById(this.movieId).subscribe((movie) => {
        this.movie = movie;
      });
    });
  }

  getImageUrlForAMovie(url) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }
}
