import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: string;
  loginOrProfile: string;
  topViewers: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    if (this.sharedService.user === null) {
      this.status = '/login';
      this.loginOrProfile = 'Login';
      this.topViewers = '/login';
    } else {
      this.status = '/profile';
      this.loginOrProfile = 'Profile';
      this.topViewers = '/reviewer';
    }
  }

}
