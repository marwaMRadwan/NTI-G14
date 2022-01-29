import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  allUsers :any[] = []
user = {}
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
i=0;
  getAllUsers(){
    this._data.getAllUsers().subscribe(
      (res)=>{
        this.allUsers = res.data
        this.user = res.data[this.i]
      },
      (e)=>{  },
      ()=>{}
    )
    }


  nextUser(){
    if(this.i!= this.allUsers.length){

      this.i+=1
      this.user = this.allUsers[this.i]
    }
  }

}
