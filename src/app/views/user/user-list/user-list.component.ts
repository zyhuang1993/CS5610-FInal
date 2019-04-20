import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  currUser: any;
  users: [any];
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.userService.findUserById(this.sharedService.user._id).subscribe(
      (user: any) => {
        this.currUser = user;
      }
    );

    this.userService.findAllUsers().subscribe(
      (users: any) => {
        this.users = users;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].type === 'Admin' || this.users[i].type === 'Paid') {
            this.users.splice(i, 1);
          }
        }
        for (let i = 0; i < this.users.length; i++) {
          for (let j = 0; j < this.users[i].follower.length; j++) {
            if (this.users[i].follower[j] === this.currUser._id) {
              this.users[i].followStatus = 'Unfollow';
            }
          }
        }
      }
    );
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      (data: any) => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i]._id === userId) {
            this.users.splice(i, 1);
          }
        }
      }
    );
    alert('Delete successfully!');
  }

  followUser(curr: string, target: string, follow: string) {
    if (follow === 'Follow') {
      this.userService.follow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
        }
      );
      alert('UnFollow successfully!');
    } else if (follow === 'Unfollow') {
      this.userService.unfollow(curr, target).subscribe(
        (user: any) => {
          this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
        }
      );
      alert('UnFollow successfully!');

    }
  }

}
