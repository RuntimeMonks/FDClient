import { Injectable } from '@angular/core';
import {feedback } from './feedback'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url = "http://localhost:3000";
  constructor(private http:HttpClient)
  
{ }
savefeedback(u: feedback) {
  console.log("In  method", u);
  return this.http.post(this.url + "/feedback", u);
}
}
