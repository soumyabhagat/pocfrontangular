import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusrComponent } from './addusr/addusr.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: UserComponent, canActivate:[AuthGaurdService] },
  { path: 'addusr', component: AddusrComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
