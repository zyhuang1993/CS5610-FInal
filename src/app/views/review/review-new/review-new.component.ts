import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../service/shared.client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
