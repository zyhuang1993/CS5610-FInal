import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './views/movie/movie-list/movie-list.component';
import {HomeComponent} from './views/home/home.component';
import {RegisterComponent} from './views/user/register/register.component';
import {LoginComponent} from './views/user/login/login.component';
import {UserListComponent} from './views/user/user-list/user-list.component';
import {MovieDetailComponent} from './views/movie/movie-detail/movie-detail.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {FavoriteMovieComponent} from './views/movie/favorite-movie/favorite-movie.component';
import {FollowerListComponent} from './views/user/follower-list/follower-list.component';
import {FollowingListComponent} from './views/user/following-list/following-list.component';
import {OtherUserComponent} from './views/user/other-user/other-user.component';
import {ReviewListComponent} from './views/review/review-list/review-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: MovieListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'movie/:dbId', component: MovieDetailComponent},
  {path: 'topMovies', component: MovieListComponent},
  {path: 'movie/:movieId', component: MovieDetailComponent},
  {path: 'user/user-list', component: UserListComponent},
  {path: 'users/:username', component: OtherUserComponent},
  {path: 'user/favorite-movie', component: FavoriteMovieComponent},
  {path: 'user/follower-list', component: FollowerListComponent},
  {path: 'user/following-list', component: FollowingListComponent},
  {path: 'user/review-list', component: ReviewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
