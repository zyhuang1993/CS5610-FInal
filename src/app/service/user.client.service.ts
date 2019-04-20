import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SharedService} from './shared.client.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
  moviedbUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {}

  baseUrl = environment.baseUrl;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = {
    headers: this.headers,
    withCredentials: true
  };

  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUserName,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: any) {
    return this.http.post(this.baseUrl + '/api/user', user);
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId);
  }

  findUserByUserName(username: string) {
    return this.http.get(this.baseUrl + '/api/user?' + 'username=' + username);
  }

  findUserByCredentials(username: string, password: string) {
    return this.http.get(this.baseUrl + '/api/user?' + 'username=' + username + '&' + 'password=' + password);
  }

  updateUser(userId: string, user: any) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }

  login(username: string, password: string) {
    this.options.withCredentials = true;
    const body = {username: username, password: password};
    return this.http.post(this.baseUrl + '/api/login', body, this.options);
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options);
  }

  findNowPlayingMovies(page) {
    const url = this.moviedbUrl + `/movie/now_playing?page=${page}&language=en-US&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  findImageByMovieId(movieId) {
    const url = this.moviedbUrl + `/movie/${movieId}/images?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(
      map((user: any) => {
        if (user !== '0') {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false; }
      })
    );
  }

  loggedInAsAdmin() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(
      map((user: any) => {
        if (user !== '0' && user.type === 'Admin') {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['']);
          return false; }
      })
    );
  }

  register(user: any) {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/register', user, this.options);
  }
}
