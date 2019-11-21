
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
// loginUser(event){
  // event.preventDefault()
  // const target = event.target
  // const username = target.querySelector('#username').value
  // const password = target.querySelector('#password').value
  // this.Auth.getUserDetails(username,password)

// console.log(username,password)
// }
loginUser(loginform: NgForm) : void{
  const email = loginform.value.username;
  const password = loginform.value.password;
  this.Auth.getUserDetails(email,password)
  console.log(email,password)
}
}

