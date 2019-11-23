import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/user.service";
import { user } from "../services/user";
import { Router } from '@angular/router';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  u: user = { name: "", email: "", eid: "", gender: "", password: "",utype:"",event:""};
  valid_user: any;

  constructor(private Auth: UserService,private routes: Router) {}

  ngOnInit() {}

  loginUser() {
    this.Auth.UsersValidate(this.u).subscribe(res => this.valid_user=res,err => console.log(err));
    {
      if(this.valid_user)
      {
        this.routes.navigate(['/home']);  
      }
      else
      {
        console.log(this.u.email)
        if (this.u.utype==="admin") {
          this.routes.navigate(['/admin']);  
        } else {
          this.routes.navigate(['/admin']); 
        }
        // this.routes.navigate(['/admin']); 
      }
    }
 }
}
