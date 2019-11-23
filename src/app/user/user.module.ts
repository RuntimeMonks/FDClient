import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports:[
    UserComponent
  ]
})
export class UserModule { }
