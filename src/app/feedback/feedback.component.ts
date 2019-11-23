import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import {feedback} from '../services/feedback';
import { Router } from "@angular/router";
@Component(
  {
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
    
  f: feedback = {name: "", email: "", message: ""};
  


  constructor(private fback:FeedbackService, private routes: Router) 
  {     
  }

  ngOnInit() {
  }
  feedbackdata()
  {
    
    console.log("beforeservice", this.f);
    this.fback.savefeedback(this.f).subscribe();
   // this.routes.navigate(["/home"]);
  }

}
