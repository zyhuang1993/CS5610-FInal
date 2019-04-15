import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../service/movie.client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: [any];
  status: string;
  loginOrProfile: string;
  topViewers: string;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
   this.findNowPlayingMoviesByPages(1);
   this.status = '/login';
   this.loginOrProfile = 'login';
   this.topViewers = '/login';
  }

  findNowPlayingMoviesByPages(page) {
    this.movieService.findNowPlayingMovies(page).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getImageUrlForAMovie(url) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }
}
