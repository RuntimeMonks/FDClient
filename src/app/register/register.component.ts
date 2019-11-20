import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { on } from 'cluster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  constructor(  ) {
    
   }

  ngOnInit() {
    
  }

 

onsubmit1(regform:NgForm): void {
const uname=regform.value.fname
const email=regform.value.mail
const eid=regform.value.eid
const gender=regform.value.gender
const password=regform.value.pwd

// console.log(uname + email + eid) 

  console.log(regform.value)
  console.log(regform.value.fname)
  if(regform.value.pwd !== regform.value.cpwd)
  {
    alert("password is not matching")
  }

}



}



