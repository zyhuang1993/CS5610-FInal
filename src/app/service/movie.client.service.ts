import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
  moviedbUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {
  }

  findNowPlayingMovies(page) {
    const url = this.moviedbUrl + `/movie/now_playing?page=${page}&language=en-US&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  findMovieDetailsById(movieId) {
    const url = this.moviedbUrl + `/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }

}
