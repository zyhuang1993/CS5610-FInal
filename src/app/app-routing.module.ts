import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './views/movie/movie-list/movie-list.component';
import {HomeComponent} from './views/home/home.component';
import {RegisterComponent} from './views/user/register/register.component';
import {LoginComponent} from './views/user/login/login.component';
import {UserListComponent} from './views/user/user-list/user-list.component';
import {TopReivewsComponent} from './views/review/top-reivews/top-reivews.component';
import {MovieDetailComponent} from './views/movie/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: MovieListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'topReviews', component: TopReivewsComponent},
  {path: 'movie/:movieId', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
