import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { HttpClientModule } from '@angular/common/http';

import { AllpostComponent } from './allpost/allpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    SingleuserComponent,
    
    AllpostComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
