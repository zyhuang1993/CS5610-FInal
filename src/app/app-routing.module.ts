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
import {AuthGuardUser} from './service/authguard-user.client.service';
import {AuthGuardAdmin} from './service/authguard-admin.client.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movie', component: MovieListComponent},
  {path: 'movie/:movieId', component: MovieDetailComponent},
  {path: 'topMovies', component: MovieListComponent},

  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardUser]},
  {path: 'users/:username', component: OtherUserComponent, canActivate: [AuthGuardUser]},
  {path: 'user/favorite-movie', component: FavoriteMovieComponent, canActivate: [AuthGuardUser]},
  {path: 'user/follower-list', component: FollowerListComponent, canActivate: [AuthGuardUser]},
  {path: 'user/following-list', component: FollowingListComponent, canActivate: [AuthGuardUser]},
  {path: 'user/review-list', component: ReviewListComponent, canActivate: [AuthGuardUser]},

  {path: 'user/user-list', component: UserListComponent, canActivate: [AuthGuardAdmin]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
