import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {PaginationService} from '../../../service/pagination.client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  keyword: string;
  movies: [any];
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.keyword = params.keyword;
      this.movieService.searchMovies(this.keyword).subscribe((data: any) => {
        this.movies = data.results;
      });
    });
  }


  getImageUrlForAMovie(url) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }

}
