import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css']
})
export class CulturalComponent implements OnInit {

  eventArray: any;
  constructor(private eService: EventService) { }

  ngOnInit() {
    this.eService.getAllEvents().subscribe(r => { (this.eventArray = r); console.log(this.eventArray) });
  }

}
