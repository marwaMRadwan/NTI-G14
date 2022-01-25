import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './pages/form1/form1.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"form", component:Form1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
