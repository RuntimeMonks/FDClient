import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/user.service";
import { user } from "../services/user";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  u: user = {
    name: "",
    email: "",
    eid: "",
    gender: "",
    password: "",
    utype: "",
    event: ""
  };
  valid_user: any;
  data: any;

  constructor(private Auth: UserService, private routes: Router) { }

  ngOnInit() { }

  loginUser() {
    let context = this;
    this.Auth.UsersValidate(this.u).subscribe(
      res => {
        context.valid_user = res;
        console.log("response", res)
        console.log("valid user0", context.valid_user)
        this.createSession(context.valid_user);
      },
      err => console.log(err)
    );
    {
      // console.log("valid user", this.valid_user)
      // if (this.valid_user) {
      //   this.routes.navigate(["/home"]);
      // } else {
      //   console.log("valid user in", this.valid_user)
      //   if (this.valid_user === "admin") {
      //     this.routes.navigate(["/admin"]);
      //   } else if (this.valid_user === "user") {
      //     this.routes.navigate(["/user"]);
      // }else{
      //   this.routes.navigate(["/home"]);
      // }
      // }
    }
    console.log("valid user1", this.valid_user)
    if (!this.valid_user) {
      // this.routes.navigate(["/home"]);
    } else {
      if (this.valid_user.utype === "admin") {
        this.routes.navigate(["/admin"]);
      } else if (this.valid_user.utype === "user") {
        this.routes.navigate(["/user"]);
      } else {
        this.routes.navigate(["/home"]);
      }
    }
  }

  createSession(data) {
    console.log("valid data", data)
    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem("token", data.token);
    this.valid_user = data;
  }
}
