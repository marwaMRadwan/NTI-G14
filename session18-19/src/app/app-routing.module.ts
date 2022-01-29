import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Error404Component } from './pages/error404/error404.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { UsercardComponent } from './pages/user/usercard/usercard.component';
import { TestComponent } from './test/test.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path:"", component:AllusersComponent},
  {path:"login", component:LoginComponent},
  {path:"test", component:TestComponent, canActivate:[AuthGuard]},
  {path:"register", component:RegisterComponent},
  {path:"user", children:[
    {path:"", component:ProfileComponent},
    {path:"show/:id", component:SingleuserComponent},
    {path:"edit/:id", component:UsercardComponent},
    {path:"delete/:id", component:RegisterComponent},
    {path:"upload-image", component:UploadImageComponent}
  ]},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
