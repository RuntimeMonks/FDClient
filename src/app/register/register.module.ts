import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SidebarModule,
    FormsModule
  ],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
