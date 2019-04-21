import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../service/user.client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) {  this.errorFlag = false; }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password).subscribe(
      (user: any) => {
        if (user === null || user.message === 'User not found or Wrong password!') {
          this.errorFlag = true;
          this.errorMsg = 'User does not exist or Wrong Password';
        } else {
          if (user.type.toString() === 'Unpaid') {
            this.router.navigate(['/advertisement/' + 'login']);
          } else {
            this.router.navigate(['/profile/']);
          }
        }
      }
    );
  }

  ngOnInit() {
  }

}
