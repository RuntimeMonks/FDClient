import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  eventArray: any;
  constructor(private eService: EventService,private router:Router) { }

  ngOnInit() {
    this.eService.getAllEvents().subscribe(r => { (this.eventArray = r); console.log(this.eventArray) });
  }

  logout() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
}
