import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './login/user/user.component';
import { SportsComponent } from './sports/sports.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path:'home',component:HomePageComponent },
  { path:'login' ,children:[
  {path:'' , component:LoginComponent},
  {path:'user', component:UserComponent},
  { path:'admin', component: AdminComponent}
]},
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'sidebar' , component:SidebarComponent},
  { path:'sports' , component:SportsComponent},
  
  { path:'register', component:RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
