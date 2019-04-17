import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  constructor() { }

  ngOnInit() {
    this.user = new Object();
    this.user.username = 'test';
    this.user.password = 'password';
  }

}
