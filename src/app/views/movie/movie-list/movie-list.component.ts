import { Component, OnInit } from '@angular/core';
import {PaginationService} from '../../../service/pagination.client.service';
import {MovieService} from '../../../service/movie.client.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: [any];
  pager: any = {};

  constructor(private paginationService: PaginationService, private movieService: MovieService) { }

  ngOnInit() {
    this.setPage(1);
  }

  getMoviePoster() {

  }

  findPopularMoviesByPages(page) {
    this.movieService.findPopularMoviesByPages(page).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getImageUrlForAMovie(url) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }

  setPage(page) {
    this.pager = this.paginationService.getPager(page);
    this.findPopularMoviesByPages(page);
  }

}
