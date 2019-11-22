import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000";

  constructor(private http:HttpClient) { }

  //auth
  getUserDetails(username, password) {
    const user: String = "admin";
    const pass: String = "admin";
    if (username === user && password === pass) {
      console.log("Validated");
    }
  }

  //register
  registerUser(u: user)
  {
    console.log("In Register User method",u);
    return this.http.post(this.url+"/signup", u);
  }

  //admin
  getEventDetails(eventName,eventType, EventDate){
    console.log(eventName,EventDate)
  }

  getEventName(eventNameDel){
    console.log(eventNameDel)
  }
}
