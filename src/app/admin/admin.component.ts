import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,private Admin: AdminService) { }

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

  fixMatches(){
    document.getElementById('fixtureEvents').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
    this.reset('manageEvents')
  }

  addWinner(){
    document.getElementById('winnerRecords').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
    this.reset('manageEvents')
    this.reset('fixtureEvents')
  }

  reset(disableId){
    document.getElementById(disableId).hidden=true;
  }

  createEvent(event){
    const target = event.target
    const eventName = target.querySelector('#genEvent').value;
    const eventDate = target.querySelector('#date').value;
    this.Admin.getEventDetails(eventName,eventDate)
    // console.log(eventName,eventDate)
  }

  deleteEvent(event){
    event.preventDefault();
    const target = event.target
    const eventNameDel = target.querySelector('#delEvent').value;
    console.log(eventNameDel)
    // this.Admin.getEventName(eventName)
  }

  enableRegister(event){
    const target = event.target;
    console.log("enableRegister");
  }

  disableRegister(event){
    const target = event.target;
    console.log("disableRegister");
  }

}
