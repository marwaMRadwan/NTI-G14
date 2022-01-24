import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { SingleuserComponent } from './pages/singleuser/singleuser.component';
import { SliderComponent } from './pages/home/shared/slider/slider.component';
import { ServicesComponent } from './pages/home/shared/services/services.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ChildComponent } from './communication/child/child.component';
import { ParentComponent } from './communication/parent/parent.component';
import { SercardComponent } from './pages/home/shared/sercard/sercard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AllusersComponent,
    SingleuserComponent,
    SliderComponent,
    ServicesComponent,
    PlaygroundComponent,
    ChildComponent,
    ParentComponent,
    SercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
