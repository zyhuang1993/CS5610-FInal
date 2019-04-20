import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.client.model';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {
  users: [any];
  follow: string;
  currUser: any;
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = new User(user._id, user.username, user.password, user.img, user.type);
          this.users = user.follower;
        }
      );
    });
  }

  followUser(target: string) {
    if (this.follow === 'Follow') {
      this.follow = 'Unfollow';
      this.userService.follow(this.currUser.username, target).subscribe(
        (user: any) => {

        }
      )
    } else if (this.follow === 'Unfollow') {
      this.follow = 'Follow';
      this.userService.unfollow(this.currUser.username, target).subscribe(
        (user: any) => {

        }
      )
    }
  }

}
