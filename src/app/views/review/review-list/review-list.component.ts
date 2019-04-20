import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: [any];
  like: string;
  reviewerLink = '';
  constructor() { }

  ngOnInit() {
    this.like = 'Like';
  }

  likeReview() {
    if (this.like === 'Like') {
      this.like = 'Unlike';
    } else if (this.like === 'Unlike') {
      this.like = 'Like';
    }
  }
  getMovieImg() {

  }

  getReviewer() {

  }
}
