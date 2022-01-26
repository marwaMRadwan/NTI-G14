import { Component, OnInit } from '@angular/core';
// import {environment} from 'src/environments/environment'
import { AuthService } from 'src/app/providers/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // environment.flag = false   ==> invalid
  // x= environment
  constructor(private _auth:AuthService) { 
    _auth.flag=false
  }

  ngOnInit(): void {
  }

}
