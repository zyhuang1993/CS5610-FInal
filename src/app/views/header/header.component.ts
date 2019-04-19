import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.client.service';
import {MovieService} from '../../service/movie.client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword: string;
  status: string;
  loginOrProfile: string;
  topReviews: string;
  logout: string;
  loggedIn: boolean;
  logoutPath: string;
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    if (this.sharedService.user === null) {
      this.status = '/login';
      this.loginOrProfile = 'Login';
      this.topReviews = '/login';
      this.loggedIn = false;

    } else {
      this.status = '/profile';
      this.loginOrProfile = 'Profile';
      this.topReviews = '/topReviews';
      this.loggedIn = true;
      this.logoutPath = '';
      this.logout = 'Log Out';
    }
  }

  navigateToSearch() {

  }

}
