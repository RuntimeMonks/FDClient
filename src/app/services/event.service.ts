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

  getAllEvents(e: event):Observable<event[]> {
    console.log("In event list type method", e);
    return this.http.get<event[]>(this.url + "/list?type=" + e.eventtype);
  }

}
