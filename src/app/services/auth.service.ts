import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // getUserDetails(username, password){
  //   const user:String = 'admin'
  //   const pass:String = 'admin'
  //   if(username === user && password === pass){
  //     console.log('Validated')
  //   }
  //   console.log(username,password)
  // }
  getUserDetails(username,password){
    const user:String = 'admin'
    const pass:String = 'admin'
    if(username === user && password === pass){
      console.log('Validated')
    }
  }
}
