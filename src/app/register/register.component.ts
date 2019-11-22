import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegserviceService} from '../regservice.service';
import {  registerLocaleData } from '@angular/common';
import{FormGroup} from '@angular/forms';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
public form: FormGroup;
regdata={};
err=[];
constructor(private  _msg1:RegserviceService)
{

}

ngOnInit() 
{


}
onsubmit1(regform:NgForm): void {
this._msg1.register(regform);
const uname=regform.value.fname
const email=regform.value.mail
const eid=regform.value.eid
const gender=regform.value.gender
const password=regform.value.pwd

// console.log(uname + email + eid) 


if(regform.value.pwd !== regform.value.cpwd)
{
// alert("password is not matching")
this.err.push("password is not matching");
}
else{
console.log(regform.value)
console.log(regform.value.fname)
}

}



}



