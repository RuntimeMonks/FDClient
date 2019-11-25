import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private routes:Router) { }

  showsidebar : boolean = true;
  showbar : boolean = false;
  logButton : boolean=true;

  ngOnInit() {
  }
  
  hidebar()
  {
      this.showsidebar = !this.showsidebar;
      this.showbar = !this.showbar;
  }

  login(){
    this.logButton = false;
    this.routes.navigate(["/login"]);
  }

}
