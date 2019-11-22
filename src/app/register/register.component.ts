import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RegserviceService } from "../services/regservice.service";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  regdata = {};

  constructor(private rServises: RegserviceService,private routes:Router) {}

  ngOnInit() {}
  onsubmit1(regform: NgForm): void {
    this.rServises.register(regform);
    const uname = regform.value.fname;
    const email = regform.value.mail;
    const eid = regform.value.eid;
    const gender = regform.value.gender;
    const password = regform.value.pwd;

    // console.log(uname + email + eid)

    if (regform.value.pwd !== regform.value.cpwd) {
      alert("password is not matching");
    } else {
      console.log(regform.value);
      console.log(regform.value.fname);
    }
  }
}
