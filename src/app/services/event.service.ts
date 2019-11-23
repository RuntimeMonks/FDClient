import { Injectable } from "@angular/core";
import { event } from "./event";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class EventService {
  url = "http://localhost:3000/event";
  constructor(private http: HttpClient) {}

  getAllEvents():Observable<event[]> {
    console.log("In event list type method");
    return this.http.get<event[]>(this.url);
  }

  saveEvent(e:event){
    console.log("In Register event method", e);
    return this.http.post<event[]>(this.url , e);
  }

  removeEvents(selectedevent){
    console.log("In delete event method");
    return this.http.delete(this.url+"?id="+selectedevent);
  }

}
