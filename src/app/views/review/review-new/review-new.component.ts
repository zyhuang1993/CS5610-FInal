import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../../../service/shared.client.service';
import {ActivatedRoute} from '@angular/router';
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
  rate: number;
  description: string;
  likes: number;
  userId: string;
  movieDBId: string;

  errorFlag: boolean;
  errorMsg = '';
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, private reviewService: ReviewService) {
    this.userId = this.sharedService.user._id;
    this.errorFlag = false;
  }

  ngOnInit() {
   this.activatedRoute.params.subscribe((params) => {
     this.movieDBId = params.dbId;
   });
  }

}
