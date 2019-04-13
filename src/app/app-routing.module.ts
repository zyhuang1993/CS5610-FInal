import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './views/movie/movie-list/movie-list.component';
import {HomeComponent} from './views/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
