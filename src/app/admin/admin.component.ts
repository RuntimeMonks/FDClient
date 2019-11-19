import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    //this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  callCreateEvent(){
    document.getElementById('createEvents').hidden=false;
    this.reset('deleteEvents')
    this.reset('manageEvents')
  }

  callDeleteEvent(){
    document.getElementById('deleteEvents').hidden=false;
    this.reset('createEvents')
    this.reset('manageEvents')
  }

  manageRegister(){
    document.getElementById('manageEvents').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
  }

  reset(disableId){
    document.getElementById(disableId).hidden=true;
  }

}
