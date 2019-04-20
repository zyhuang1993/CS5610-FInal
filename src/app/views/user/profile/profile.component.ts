import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = null;
  selectedValue: string;
  isAdmin: boolean;
  errorFlag: boolean;
  errorMsg = '';
  public filterTypes = [
    {value: 'Admin', display: 'Admin'},
    {value: 'Unpaid', display: 'User'},
    {value: 'Paid', display: 'Vip'}
  ];
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.user = user;
          if (this.user.type === 'Admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }
      );
    });
  }

  getUserImg() {
    if (this.user.img === '') {
      return '../../../../assets/images/default-heads.jpg';
    } else {
      return this.user.img;
    }
  }

  updateUser() {
    this.user.type = this.selectedValue;
    this.userService.updateUser(this.user._id, this.user).subscribe(
      (user: any) => {
        this.user = user;
        this.router.navigate(['/profile/']);
      }
    );
    alert('Update successfully!');
  }

  filterChanged(selectedValue: string){
    this.selectedValue = selectedValue;
  }



}
