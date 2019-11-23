import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  getEventDetails(eventName,eventType, EventDate){
    console.log(eventName,EventDate)
  }

  getEventName(eventNameDel){
    console.log(eventNameDel)
  }
}
