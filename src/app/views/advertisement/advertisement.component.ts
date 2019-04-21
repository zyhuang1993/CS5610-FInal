import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../service/shared.client.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  source: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.source = params.source;
      if (this.source === 'login') {
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 5000);  // 5s
      } else if (this.source === undefined) {
        setTimeout(() => {
          this.router.navigate(['/topMovies']);
        }, 5000);  // 5s
      } else {
        setTimeout(() => {
          this.router.navigate(['/search/movie/' + this.source]);
        }, 5000);  // 5s
      }
    });
  }

}
