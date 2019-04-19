import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../../../service/shared.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ReviewService} from '../../../service/review.client.service';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  @ViewChild('f') reviewForm: NgForm;
  title: string;
  description: string;
  likes: number;
  userId: string;
  movieDBId: string;

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService, private router: Router) {
    this.userId = this.sharedService.user._id;
  }

  ngOnInit() {
   this.activatedRoute.params.subscribe((params) => {
     this.movieDBId = params.dbId;
   });
  }

  submit() {
    this.title = this.reviewForm.value.title;
    this.description = this.reviewForm.value.description;
    const review = {
      title: this.title,
      description: this.description,
      reviewer: this.userId,
      likes: 0,
    };
    this.reviewService.createReview(this.movieDBId, review).subscribe((data) => {
      this.router.navigate(['/movie/' + this.movieDBId]);
    });
  }

}
