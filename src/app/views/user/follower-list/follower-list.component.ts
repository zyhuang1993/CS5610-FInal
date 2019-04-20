import { Component, OnInit } from '@angular/core';
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
  otherUser: any;
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = user;
        }
      );

      this.userService.findUserByUserName(params['username']).subscribe(
        (user: any) => {
          this.otherUser = user;
        }
      );

      this.userService.findFollowersByUserName(params['username']).subscribe(
        (users: any) => {
          this.users = users;
        }
      );


    });
  }

  followUser(curr: string, target: string) {
    if (this.follow === 'Follow') {
      this.follow = 'Unfollow';
      this.userService.follow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/' + this.currUser.username + '/follower-list']);
        }
      );
    } else if (this.follow === 'Unfollow') {
      this.follow = 'Follow';
      this.userService.unfollow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/' + this.currUser.username + '/follower-list']);
        }
      );
    }
  }

}
