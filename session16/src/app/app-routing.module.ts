import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleuserComponent } from './pages/singleuser/singleuser.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"allUsers", component:AllusersComponent},
  {path:"allUsers/:id", component:SingleuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }