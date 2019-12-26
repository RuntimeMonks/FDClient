import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css']
})
export class CulturalComponent implements OnInit {

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
