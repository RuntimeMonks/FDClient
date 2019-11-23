import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { EventService } from "../services/event.service";
import { event } from "../services/event";
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  eArr = [{}];
  evt: event = { eventtype: "", ename: "", date: "" };
  selectedevent:String= "";

  

  constructor(
    private router: Router,
    private Admin: UserService,
    private eService: EventService
  ) {}


  ngOnInit() {
    this.eService.getAllEvents().subscribe(r => (this.eArr = r));
  }

  logout() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("basicauth");
    sessionStorage.removeItem("utype");
    this.router.navigateByUrl("/login");
  }

  removeEvent() {
    console.log("in delete function ts")
    this.eService.removeEvents(this.selectedevent).subscribe();
    this.ngOnInit();
    this.resetAll();
  }

  callCreateEvent() {
    document.getElementById("createEvents").hidden = false;
    this.reset("deleteEvents");
    this.reset("manageEvents");
    this.reset("winnerRecords");
    this.reset("fixtureEvents");
    this.reset("winnerRecordsYear");
  }

  saveEvent() {
    console.log(this.evt);
    this.eService.saveEvent(this.evt).subscribe();
    this.ngOnInit();
    this.resetAll();
  }

  callDeleteEvent() {
    document.getElementById("deleteEvents").hidden = false;
    this.reset("createEvents");
    this.reset("manageEvents");
    this.reset("winnerRecords");
    this.reset("fixtureEvents");
    this.reset("winnerRecordsYear");
  }

  manageRegister() {
    document.getElementById("manageEvents").hidden = false;
    this.reset("deleteEvents");
    this.reset("createEvents");
    this.reset("winnerRecords");
    this.reset("fixtureEvents");
    this.reset("winnerRecordsYear");
  }

  fixMatches() {
    document.getElementById("fixtureEvents").hidden = false;
    this.reset("deleteEvents");
    this.reset("createEvents");
    this.reset("manageEvents");
    this.reset("winnerRecords");
    this.reset("winnerRecordsYear");
  }

  yearPick() {
    document.getElementById("winnerRecordsYear").hidden = false;
    this.reset("deleteEvents");
    this.reset("createEvents");
    this.reset("manageEvents");
    this.reset("fixtureEvents");
    this.reset("winnerRecords");
  }

  addWinner() {
    document.getElementById("winnerRecords").hidden = false;
    this.reset("deleteEvents");
    this.reset("createEvents");
    this.reset("manageEvents");
    this.reset("fixtureEvents");
    this.reset("winnerRecordsYear");
  }

  resetAll() {
    this.reset("createEvents");
    this.reset("deleteEvents");
    this.reset("manageEvents");
    this.reset("winnerRecords");
    this.reset("fixtureEvents");
    this.reset("winnerRecordsYear");
  }

  reset(disableId) {
    document.getElementById(disableId).hidden = true;
  }

  createEvent(event) {
    const target = event.target;
    const eventName = target.querySelector("#genEvent").value;
    const eventType = target.querySelector("#genType").value;
    const eventDate = target.querySelector("#date").value;
    this.Admin.getEventDetails(eventName, eventType, eventDate);
    // console.log(eventName,eventDate)
  }

  deleteEvent(event) {
    event.preventDefault();
    const target = event.target;
    const eventNameDel = target.querySelector("#delEvent").value;
    console.log(eventNameDel);
    // this.Admin.getEventName(eventName)
  }

  enableRegister(event) {
    const target = event.target;
    console.log("enableRegister");
  }

  disableRegister(event) {
    const target = event.target;
    console.log("disableRegister");
  }
}
