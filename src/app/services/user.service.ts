import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { user } from "./user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = "http://localhost:3000";
  data:any;

  constructor(private http: HttpClient) {}

  //log
  UsersValidate(u: user) {
    const headers = new HttpHeaders({
      Authorization: "Basic" + btoa(u.email + ":" + u.password)
    });
    // return this.http
    //   .get<any>(
        // this.url +
        //   "/login?email=" +
        //   u.email +
        //   "&" +
        //   "password=" +
        //   u.password,
        // { headers }
    //   )
    //   .pipe(
    //     map((userData => {
          // sessionStorage.setItem("email", u.email);
          // let authString = "Basic " + btoa(u.email + ":" + u.password);
          // sessionStorage.setItem("basicauth", authString);
    //       console.log("userdata" + userData);
    //       return userData;
    //     }),((res : Response)=>{return res.json();})
    //   ));
    return this.http.get<any>(this.url+
      "/login?email=" +
      u.email +
      "&" +
      "password=" +
      u.password,
    { headers })
  }


  //register
  registerUser(u: user) {
    console.log("In Register User method", u);
    return this.http.post(this.url + "/signup", u);
  }

  //admin
  getEventDetails(eventName, eventType, EventDate) {
    console.log(eventName, EventDate);
  }

  getEventName(eventNameDel) {
    console.log(eventNameDel);
  }

  isUserLoggedIn() {
    let email = sessionStorage.getItem("email");
    console.log(!(email === null));
    return !(email === null);
  }
}
