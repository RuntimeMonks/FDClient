import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

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
  }

}
