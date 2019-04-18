import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {
  users: [any];
  follow: string;

  constructor() { }

  ngOnInit() {
  }

  followUser() {
    if (this.follow === 'Follow') {
      this.follow = 'Unfollow';
    } else if (this.follow === 'Unfollow') {
      this.follow = 'Follow';
    }
  }

}
