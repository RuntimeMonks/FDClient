import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { BasicauthhttpinterceptorService } from './services/basicauthhttpinterceptor.service';
import { EventService } from './services/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { SidebarModule } from './sidebar/sidebar.module';
import { AdminModule } from './admin/admin.module';
import { AboutModule } from './about/about.module';
import { HomePageModule } from './home-page/home-page.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';
import { SportsModule } from './sports/sports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    SidebarModule,
    AdminModule,
    AboutModule,
    HomePageModule,
    LoginModule,
    RegisterModule,
    UserModule,
    SportsModule
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
