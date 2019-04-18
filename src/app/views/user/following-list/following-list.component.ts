import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.css']
})
export class FollowingListComponent implements OnInit {
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
