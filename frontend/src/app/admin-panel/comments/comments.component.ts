import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {LandingServiceService} from '../../landing-main/landing-service.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  CommentList:any
  constructor(private serve:LandingServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.serve.reviewList().subscribe((data) => {
      this.CommentList = data
    })
   }


}
