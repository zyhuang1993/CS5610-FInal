import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  reviews: [any];
  reviewerLink = '';
  like: string;
  constructor() { }

  ngOnInit() {
  }

  likeReview() {
    if (this.like === 'Like') {
      this.like = 'Unlike';
    } else if (this.like === 'Unlike') {
      this.like = 'Like';
    }
  }
}
