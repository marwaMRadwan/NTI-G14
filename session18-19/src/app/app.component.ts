import { Component } from '@angular/core';
// import {environment} from 'src/environments/environment'
import { AuthService } from './providers/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // flag=environment.flag
  x=5
  constructor(public _auth:AuthService){}
}
