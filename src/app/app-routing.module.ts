import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path:'home',component:HomePageComponent },
  { path:'login' ,component:LoginComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'sidebar' , component:SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
