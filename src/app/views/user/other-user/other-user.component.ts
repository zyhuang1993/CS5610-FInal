import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-user',
  templateUrl: './other-user.component.html',
  styleUrls: ['./other-user.component.css']
})
export class OtherUserComponent implements OnInit {

  user: any;
  selectedValue: string;
  public filterTypes = [
    {value: 'Admin', display: 'Admin'},
    {value: 'Unpaid', display: 'User'},
    {value: 'Paid', display: 'Vip'}
  ];
  constructor() { }

  ngOnInit() {
    this.user = new Object();
    this.user.username = 'test';
    this.user.password = 'password';
    this.user.follower = [];
    this.user.following = [];
    // this.user.reviews = [];
    // this.user.favorite = [];
    this.user.img = '../../../../assets/images/default-heads.jpg';
  }

  getUserImg() {
    if (this.user.img == '') {
      return '../../../../assets/images/default-heads.jpg';
    } else {
      return this.user.img;
    }
  }

  updateUser() {
    // this.userService.updateUser(this.user.uid, this.user).subscribe(
    //   (user: any) => {
    //     this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
    //     this.router.navigate(['/profile/']);
    //   }
    // );
    // alert('Update successfully!');
  }

  filterChanged(selectedValue: string){
    this.selectedValue = selectedValue;
  }

}
