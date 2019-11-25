import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginComponent } from '../login/login.component';
import { SportsComponent } from '../sports/sports.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../admin/admin.component';
import { AboutComponent } from '../about/about.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path:'home',component:HomePageComponent },
  { path:'login' ,component:LoginComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'sidebar' , component:SidebarComponent},
  { path:'sports' , component:SportsComponent},
  { path:'admin', component: AdminComponent},
  { path:'register', component:RegisterComponent },
  { path:'about', component:AboutComponent },
  { path:'user', component:UserComponent }
]

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    SidebarComponent,
    RouterModule
  ]
})
export class SidebarModule { }
