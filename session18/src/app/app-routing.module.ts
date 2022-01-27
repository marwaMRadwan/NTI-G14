import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { UsercardComponent } from './pages/user/usercard/usercard.component';

const routes: Routes = [
  {path:"", component:AllusersComponent},
  {path:"login", component:LoginComponent},
  {path:"user", children:[
    {path:"", component:ProfileComponent},
    {path:"show/:id", component:SingleuserComponent},
    {path:"edit/:id", component:UsercardComponent},
    {path:"delete/:id", component:RegisterComponent}
  ]},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
