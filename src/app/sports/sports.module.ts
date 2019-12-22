import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [SportsComponent],
  imports: [
    CommonModule,
    SidebarModule,

  ],
  exports:[
    SportsComponent
  ]
})
export class SportsModule { }
