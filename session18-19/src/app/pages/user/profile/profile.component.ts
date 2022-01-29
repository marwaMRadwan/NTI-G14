import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerUser:FormGroup= new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(2)]),
    age:new FormControl(),
    password:new FormControl(""),
    email:new FormControl(""),
    gender:new FormControl(""),
    malStatus:new FormControl(""),
    isAdmin: new FormControl(false)
  })
  constructor() { }

  ngOnInit(): void {
  }

}
