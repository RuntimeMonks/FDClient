import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SidebarModule,
    FormsModule,
    NgbModule,
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
