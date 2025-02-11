import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';
import {ReviewService} from '../../../service/review.client.service';
import {MovieService} from '../../../service/movie.client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {_id: '', username: 'username', password: 'password',
    img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=' +
      'format&fit=crop&w=1000&q=80', type: 'Unpaid'};
  selectedValue: string;
  isAdmin: boolean;
  errorFlag: boolean;
  errorMsg = '';
  public filterTypes = [
    {value: 'Unpaid', display: 'User'},
    {value: 'Paid', display: 'Vip'}
  ];
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,
              private sharedService: SharedService, private reviewService: ReviewService, private movieService: MovieService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.user = user;
          if (this.user.type === 'Admin') {
            this.isAdmin = true;
            this.filterTypes = [
              {value: 'Unpaid', display: 'User'},
              {value: 'Paid', display: 'Vip'},
              {value: 'Admin', display: 'Admin'}
            ];
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
