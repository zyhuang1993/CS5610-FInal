import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.client.service';
import {UserService} from '../../service/user.client.service';

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
  logoutMsg: string;
  loggedIn: boolean;
  logoutPath: string;
  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }


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
      this.logoutMsg = 'Log Out';
    }
  }

  logout() {
    this.sharedService.user = null;
    this.userService.logout()
      .subscribe(
        (data: any) => {
          this.router.navigate(['/login']);
        }
      );
  }

  navigateToSearch() {

  }

}
