import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {UserService} from '../../../service/user.client.service';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css']
})
export class FavoriteMovieComponent implements OnInit {
  movies: [any];

  constructor(private movieService: MovieService, private userService: UserService, private sharedService: SharedService) { }



  ngOnInit() {
    this.movies = this.sharedService.user.favorite;
  }
}
