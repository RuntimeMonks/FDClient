import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SidebarModule,
    FormsModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
