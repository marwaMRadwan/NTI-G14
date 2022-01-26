import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  isloaded=false
  allUsers :any[] = []

  constructor(private _data:DataService, private router:Router) { }

  ngOnInit(): void { this.getAllUsers() }

  getAllUsers(){
    this._data.getAllUsers().subscribe(
      (res)=>{ this.allUsers = res.data },
      (e)=>{ this.router.navigateByUrl('/login') },
      ()=>{this.isloaded=true}
    )
  }
}
