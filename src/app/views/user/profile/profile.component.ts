import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
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
              private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.user = user;
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
    this.userService.updateUser(this.user.uid, this.user).subscribe(
      (user: any) => {
        this.user = user;
        this.router.navigate(['/profile']);
      }
    );
    alert('Update successfully!');
  }

  filterChanged(selectedValue: string){
    this.selectedValue = selectedValue;
    this.isAdmin = this.selectedValue === 'Admin';
  }

}
