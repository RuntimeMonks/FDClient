import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,private Admin: AdminService) { }

  winList=["Cricket","Chess","Carrom","Badminton"];
  years=[2017,2018,2019,2020];

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
    this.reset('winnerRecords')
    this.reset('fixtureEvents')
    this.reset('winnerRecordsYear')
  }

  callDeleteEvent(){
    document.getElementById('deleteEvents').hidden=false;
    this.reset('createEvents')
    this.reset('manageEvents')
    this.reset('winnerRecords')
    this.reset('fixtureEvents')
    this.reset('winnerRecordsYear')
  }

  manageRegister(){
    document.getElementById('manageEvents').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
    this.reset('winnerRecords')
    this.reset('fixtureEvents')
    this.reset('winnerRecordsYear')
  }

  fixMatches(){
    document.getElementById('fixtureEvents').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
    this.reset('manageEvents')
    this.reset('winnerRecords')
    this.reset('winnerRecordsYear')
  }

  yearPick(){
    document.getElementById('winnerRecordsYear').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
    this.reset('manageEvents')
    this.reset('fixtureEvents')
    this.reset('winnerRecords')
  }

  addWinner(){
    document.getElementById('winnerRecords').hidden=false;
    this.reset('deleteEvents')
    this.reset('createEvents')
    this.reset('manageEvents')
    this.reset('fixtureEvents')
    this.reset('winnerRecordsYear')
  }

  reset(disableId){
    document.getElementById(disableId).hidden=true;
  }

  createEvent(event){
    const target = event.target
    const eventName = target.querySelector('#genEvent').value;
    const eventType = target.querySelector('#genType').value;
    const eventDate = target.querySelector('#date').value;
    this.Admin.getEventDetails(eventName,eventType,eventDate)
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
