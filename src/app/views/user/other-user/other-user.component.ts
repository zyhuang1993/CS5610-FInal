import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-other-user',
  templateUrl: './other-user.component.html',
  styleUrls: ['./other-user.component.css']
})
export class OtherUserComponent implements OnInit {

  currUser: any;
  otherUser: any;
  follow = 'Follow';
  followings: [any];
  errorFlag: boolean;
  errorMsg = '';
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = user;
          this.followings = user.following;

        }
      );
      this.userService.findUserByUserName(params['username']).subscribe(
        (user: any) => {
          this.otherUser = user;
          for (let i = 0; i < this.followings.length; i++) {
            if (this.followings[i].username === this.otherUser.username) {
              this.follow = 'Unfollow';
            }
          }
        }
      );
    });
  }

  getUserImg() {
    if (this.currUser.img === '') {
      return '../../../../assets/images/default-heads.jpg';
    } else {
      return this.currUser.img;
    }
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
