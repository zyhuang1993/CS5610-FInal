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

  currUser = {_id: '', username: 'username', password: 'password',
    img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=' +
      'format&fit=crop&w=1000&q=80', type: 'Unpaid'};
  otherUser = {_id: '', username: 'username', password: 'password',
    img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=' +
      'format&fit=crop&w=1000&q=80', type: 'Unpaid', follower: [], reviews: [], favorite: []};
  follow = 'Follow';
  followings: [any];
  errorFlag: boolean;
  errorMsg = '';
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('refresh')) {
        this.ngOnInit();
      }
    });
  }

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
            if (this.followings[i] === this.otherUser._id) {
              this.follow = 'Unfollow';
            }
          }
        }
      );

    });
  }

  getUserImg() {
    if (this.otherUser.img === '') {
      return '../../../../assets/images/default-heads.jpg';
    } else {
      return this.otherUser.img;
    }
  }


  followUser(curr: string, target: string) {
    if (this.follow === 'Follow') {
      this.follow = 'Unfollow';
      this.userService.follow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/users/' + target], {
            queryParams: {refresh: new Date().getTime()}
          });
        }
      );
    } else if (this.follow === 'Unfollow') {
      this.follow = 'Follow';
      this.userService.unfollow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/users/' + target], {
            queryParams: {refresh: new Date().getTime()}
          });
        }
      );
    }
  }

}
