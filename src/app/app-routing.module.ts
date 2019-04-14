import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './views/movie/movie-list/movie-list.component';
import {HomeComponent} from './views/home/home.component';
import {RegisterComponent} from './views/user/register/register.component';
import {LoginComponent} from './views/user/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: MovieListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
