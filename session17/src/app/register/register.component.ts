import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  handelAddUser(addUser:NgForm){
if(addUser.valid){
  console.log("test")
  this._data.addUser(addUser.value).subscribe(res=> console.log(res))
}
  }
}
