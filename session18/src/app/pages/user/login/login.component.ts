import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  user:any = {
    email:"",
    password:""
  }
  constructor(private _auth:AuthService) { 
    _auth.flag=false
  }

  ngOnInit(): void {
  }
  handleLogin(data:NgForm){
    if(data.valid){
      console.log(this.user)
      this._auth.login(this.user).subscribe(data=>console.log(data))
    }
  }
  x=false
  test(){ this.x=true }
}
