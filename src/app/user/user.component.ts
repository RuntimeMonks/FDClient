import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { EventService } from "../services/event.service";
import { event } from "../services/event";
import { user } from '../services/user';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  eArr = [{}];
  evt: event = { eventtype: "", ename: "", date: "" };
  u: user = { name: "", email: "", eid: "", gender: "", password: "",utype:"",event:""};

  //temprory data
  toppings = new FormControl();
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];

  constructor(
    private router: Router,
    private Admin: UserService,
    private eService: EventService
  ) {}

  ngOnInit() {
    this.eService.getAllEvents().subscribe(r => (this.eArr = r));
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
