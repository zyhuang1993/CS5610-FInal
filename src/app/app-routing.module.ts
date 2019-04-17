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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: MovieListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'topMovies', component: MovieListComponent},
  {path: 'movie/:movieId', component: MovieDetailComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'favorite-movie', component: FavoriteMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
