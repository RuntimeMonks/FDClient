import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  eventArray: any;
  constructor(private eService: EventService) { }

  ngOnInit() {
    this.eService.getAllEvents().subscribe(r => { (this.eventArray = r); console.log(this.eventArray) });
  }

}
