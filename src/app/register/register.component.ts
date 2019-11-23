import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { user } from "../services/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  // public form: FormGroup;
  // regdata = {};

  u: user = { name: "", email: "", eid: "", gender: "", password: "",utype:"",event:""};
  cpwd: String = "";

  constructor(private rServises: UserService, private routes: Router) {}

  ngOnInit() {}

  register() {
    console.log("beforeservice", this.u);
    if (this.u.password !== this.cpwd) {
      document.getElementById("passMatch").innerHTML +=
        "Password and Current Password Mismatch!!";
    } else {
      this.rServises.registerUser(this.u).subscribe();
      this.routes.navigate(["/home"]);
    }

    // this.rServises.register(regform);
    // const uname = regform.value.fname;
    // const email = regform.value.mail;
    // const eid = regform.value.eid;
    // const gender = regform.value.gender;
    // const password = regform.value.pwd;
    // console.log(uname + email + eid)
    // if (regform.value.pwd !== regform.value.cpwd) {
    //   alert("password is not matching");
    // } else {
    //   console.log(regform.value);
    //   console.log(regform.value.fname);
    // }
  }
}
