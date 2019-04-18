import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  v_password: string;
  img: string;
  selectedValue: string;
  errorFlag: boolean;
  errorMsg = '';
  public filterTypes = [
    {value: 'Admin', display: 'Admin'},
    {value: 'Unpaid', display: 'User'},
    {value: 'Paid', display: 'Vip'}
  ];


  constructor(private userService: UserService, private router: Router) {
    this.errorFlag = false;
  }

  ngOnInit() {
    this.errorFlag = false;
  }

  filterChanged(selectedValue: string){
    this.selectedValue = selectedValue;
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;
    this.img = this.registerForm.value.img;
    if (this.v_password === this.password) {
      // const user: User = new User(Math.random() + '', this.username, this.password, this.firstName, this.lastName, this.email);

    //   this.userService.register(user).subscribe(
    //     (data: any) => {
    //       if (data.message === 'User is already exist!') {
    //         this.errorFlag = true;
    //         this.errorMsg = 'User is already exist! Please use a new username!';
    //       } else {
    //         // this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
    //         this.router.navigate(['/profile']);
    //       }
    //     }
    //   );
    // } else {
    //   this.errorFlag = true;
    //   this.errorMsg = 'Password needs to be verified!';
    }
  }

}
