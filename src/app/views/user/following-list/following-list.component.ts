import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.css']
})
export class FollowingListComponent implements OnInit {
  users: [any];
  currUser: any;
  otherUser: any;
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
        }
      );

      this.userService.findUserByUserName(params['username']).subscribe(
        (user: any) => {
          this.otherUser = user;
        }
      );

      this.userService.findFollowingsByUserName(params['username']).subscribe(
        (users: any) => {
          this.users = users;
          for (let i = 0; i < this.users.length; i++) {
            if(this.users[i]._id === this.currUser._id) {
              this.users[i].followStatus = 'Self';
              continue;
            }
            for (let j = 0; j < this.users[i].follower.length; j++) {
              if (this.users[i].follower[j] === this.currUser._id) {
                this.users[i].followStatus = 'Unfollow';
              }
            }
          }
        }
      );
    });
  }

  followUser(curr: string, target: string, follow: string) {
    if (follow === 'Follow') {
      this.userService.follow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/' + this.otherUser.username + '/following-list'], {
            queryParams: {refresh: new Date().getTime()}
          });

          // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
        }
      );
      alert('Follow successfully!');
    } else if (follow === 'Unfollow') {
      this.userService.unfollow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/' + this.otherUser.username + '/following-list'],{
            queryParams: {refresh: new Date().getTime()}
          });

          // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
        }
      );
      alert('UnFollow successfully!');
    }
  }

}
