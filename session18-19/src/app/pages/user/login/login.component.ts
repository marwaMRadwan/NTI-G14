import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import { ActivatedRoute, Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = { email:"", password:"" }
  msg : string = ""
  x : boolean = false
  notLoggedMsg = ""
  constructor(private _auth:AuthService, private router: Router, private _Activated:ActivatedRoute) {
    _auth.flag=false
  }
  ngOnInit(): void {
  if(this._Activated.snapshot.queryParams['msg'])
    this.notLoggedMsg=this._Activated.snapshot.queryParams['msg']
  this.profile()
  }
  onBlur() : void { this.x=true }
  handleLogin(loginForm:NgForm): void {
    if(loginForm.valid){
      this._auth.login(this.user).subscribe(
        (res) => { localStorage.setItem("proToken", res.data.token) } ,
        (e)=>{ this.msg =  e.error.data },
        ()=>{
          this.msg=""
          this.x=false
          loginForm.resetForm()
          this.profile()
        }
      )
    }
  }
  profile(){
    this._auth.me().subscribe(
      (data)=>{this._auth.userData = data.data},
      (e)=>{},
      ()=>{
        this._auth.flag=true
        this.router.navigateByUrl('/')
      }
    )
  }
}
