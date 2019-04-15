import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../service/movie.client.service';
import {PaginationService} from '../../service/pagination.client.service';

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
  pager: any = {};
  constructor(private movieService: MovieService, private paginationService: PaginationService) { }

  ngOnInit() {
   this.setPage(1);
   this.status = '/login';
   this.loginOrProfile = 'login';
   this.topViewers = '/login';
  }

  findNowPlayingMoviesByPages(page) {
    return this.movieService.findNowPlayingMovies(page).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getImageUrlForAMovie(url) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }

  setPage(page) {
    this.pager = this.paginationService.getPager(page);
    this.findNowPlayingMoviesByPages(page);
  }
}
