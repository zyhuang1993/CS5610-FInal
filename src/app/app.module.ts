import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { ReviewNewComponent } from './views/review/review-new/review-new.component';
import { MovieListComponent } from './views/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './views/movie/movie-detail/movie-detail.component';
import { MovieService } from './service/movie.client.service';
import { UserService } from  './service/user.client.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './views/header/header.component';
import { SharedService } from './service/shared.client.service';
import { UserListComponent } from './views/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ReviewNewComponent,
    MovieListComponent,
    MovieDetailComponent,
    HeaderComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService, UserService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
