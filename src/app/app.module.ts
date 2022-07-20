import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddusrComponent } from './addusr/addusr.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthIntService } from './service/basic-auth-int.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddusrComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthIntService, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
