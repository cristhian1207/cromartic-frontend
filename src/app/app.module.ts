import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './template/footer/footer.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { NavbarFixedComponent } from './template/navbar/navbar-fixed/navbar-fixed.component';
import { NavbarScrollComponent } from './template/navbar/navbar-scroll/navbar-scroll.component';
import { PartnerListComponent } from './partner-list/partner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    UserListComponent,
    UserComponent,
    NavbarFixedComponent,
    NavbarScrollComponent,
    PartnerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
