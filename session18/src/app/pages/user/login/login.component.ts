import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = { email:"", password:"" }
  msg : string = ""
  x : boolean = false
  constructor(private _auth:AuthService, private router: Router) { 
    _auth.flag=false
  }
  ngOnInit(): void { }
  onBlur() : void { this.x=true }
  handleLogin(data:NgForm): void {
    if(data.valid){
      this._auth.login(this.user).subscribe(
        (res) => { localStorage.setItem("proToken", res.data.token) } ,
        (e)=>{ this.msg =  e.error.data },
        ()=>{
          this.msg=""
          this.x=false
          this._auth.flag=true
          data.resetForm()
          this.router.navigateByUrl('/profile')
        }        
      )
    }
  }
}
