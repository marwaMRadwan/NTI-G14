import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './communication/parent/parent.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleuserComponent } from './pages/singleuser/singleuser.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  // {path:"allUsers", component:AllusersComponent},
  // {path:"allUsers/:id", component:SingleuserComponent},
  // {path:"play", component:PlaygroundComponent},
  // {path:"", component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
