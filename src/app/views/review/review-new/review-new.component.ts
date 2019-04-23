import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../../../service/shared.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ReviewService} from '../../../service/review.client.service';
import {MovieService} from '../../../service/movie.client.service';
import {UserService} from '../../../service/user.client.service';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  @ViewChild('f') reviewForm: NgForm;
  title: string;
  description: string;
  rate: number;
  userId: string;
  movieDBId: string;
  movie: any;
  username: string;
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, private userService: UserService,
              private reviewService: ReviewService, private router: Router, private movieService: MovieService) {
    this.userId = this.sharedService.user._id;
    this.username = this.sharedService.user.username;
  }

  ngOnInit() {
   this.activatedRoute.params.subscribe((params) => {
     this.movieDBId = params.dbId;
     this.movieService.findMovieByDbId(this.movieDBId).subscribe((data) => {
       this.movie = data;
     });
   });
  }

  submit() {
    this.title = this.reviewForm.value.title;
    this.description = this.reviewForm.value.description;
    this.rate = this.reviewForm.value.rate;
    if (this.rate < 0 || this.rate > 5) {
      alert('the rate should be between 0 and 5.');
    } else {
      const review = {
        title: this.title,
        description: this.description,
        rate: this.rate,
        reviewer: this.userId,
        reviewerName: this.username,
        likes: 0,
        poster_path: this.movie.poster_path,
        db_id: this.movieDBId
      };

      this.reviewService.createReview(this.movieDBId, review).subscribe((data: any) => {
        this.userService.addReview(this.userId, data._id).subscribe(
          (res) => {
            this.router.navigate(['/movie/' + this.movieDBId]);
          }
        );
      });
    }

  }

}
