import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';
import { CulturalComponent } from './cultural.component';




@NgModule({
  declarations: [CulturalComponent],
  imports: [
    CommonModule,
    SidebarModule,
    FormsModule
  ],
  exports:[
    CulturalComponent
  ]
})
export class CulturalModule { }
