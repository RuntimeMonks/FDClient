import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SportsComponent } from './sports/sports.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { BasicauthhttpinterceptorService } from './services/basicauthhttpinterceptor.service';
import { EventService } from './services/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { UserComponent } from './user/user.component';
import { CulturalComponent } from './cultural/cultural.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidebarComponent,
    LoginComponent,
    SportsComponent,
    AdminComponent,
    RegisterComponent,
    UserComponent,
    CulturalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatSelectModule,
    // RouterModule.forRoot([
    //   {
    //     path:'',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    //   },
    //   {path: 'home',
    //   component: HomePageComponent}
    // ])
  ],
  providers: [
    UserService,
    EventService,
    { provide:HTTP_INTERCEPTORS, useClass:BasicauthhttpinterceptorService, multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
