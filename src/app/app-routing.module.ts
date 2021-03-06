import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SportsComponent } from './sports/sports.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { CulturalComponent } from './cultural/cultural.component';



const routes: Routes = [
  { path:'home',component:HomePageComponent },
  { path:'login' ,component:LoginComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'sidebar' , component:SidebarComponent},
  { path:'sports' , component:SportsComponent},
  { path:'cultural' , component:CulturalComponent},
  { path:'admin', component: AdminComponent},
  { path:'register', component:RegisterComponent },
  { path:'about', component:AboutComponent },
  { path:'user', component:UserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
