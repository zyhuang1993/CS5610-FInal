import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {ReviewService} from '../../../service/review.client.service';
import {MovieService} from '../../../service/movie.client.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  currUser: any;
  users: [any];
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute, private reviewService: ReviewService, private movieService: MovieService) {
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
          this.userService.findAllUsers().subscribe(
            (users: any) => {
              this.users = users;
              for (let i = 0; i < this.users.length; i++) {
                if (this.users[i]._id === this.currUser._id) {
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
        }
      );
    });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      (data: any) => {
        this.reviewService.deleteUserReviews(userId).subscribe((data) => {
          this.movieService.deleteUserReviewsInMovie(userId).subscribe((data) => {
            this.router.navigate(['/user/user-list'], {
              queryParams: {refresh: new Date().getTime()}
            });
          });
        });
      }
    );
    alert('Delete successfully!');
  }

  followUser(curr: string, target: string, follow: string) {
    if (follow === 'Follow') {
      this.userService.follow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/user-list'], {
            queryParams: {refresh: new Date().getTime()}
          });

          // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
        }
      );
      alert('Follow successfully!');
    } else if (follow === 'Unfollow') {
      this.userService.unfollow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/user-list'],{
            queryParams: {refresh: new Date().getTime()}
          });

          // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
        }
      );
      alert('UnFollow successfully!');

    }
  }

  judge(status: string) {
    if (status === 'Self') {
      return false;
    } else {
      return true;
    }
  }

  type(type: string) {
    if (type === 'Unpaid') {
      return true;
    } else {
      return false;
    }
  }
}
