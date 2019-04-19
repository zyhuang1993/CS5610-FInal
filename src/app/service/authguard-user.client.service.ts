import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from './user.client.service';

@Injectable()
export class AuthGuardUser implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.loggedIn();
  }
}
