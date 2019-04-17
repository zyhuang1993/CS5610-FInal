import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  ngStyle: { [key: string]: string; };
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
