import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: [any];
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(
      (users: any) => {
        this.users = users;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].type === 'Admin' || this.users[i].type === 'Paid') {
            this.users.splice(i, 1);
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

}
