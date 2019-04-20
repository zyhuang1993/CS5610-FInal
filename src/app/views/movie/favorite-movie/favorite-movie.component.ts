import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../service/movie.client.service';
import {UserService} from '../../../service/user.client.service';
import {SharedService} from '../../../service/shared.client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css']
})
export class FavoriteMovieComponent implements OnInit {
  movies: [any];
  currUser: any;
  otherUser: any;
  constructor(private movieService: MovieService, private userService: UserService, private sharedService: SharedService,
              private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = user;
        }
      );

      this.userService.findUserByUserName(params['username']).subscribe(
        (user: any) => {
          this.otherUser = user;
          this.movies = this.otherUser.favorite;
        }
      );



    });
  }

  getImageUrlForAMovie(url) {
    if (url) {
      return 'https://image.tmdb.org/t/p/original' + url;
    }
  }
}
