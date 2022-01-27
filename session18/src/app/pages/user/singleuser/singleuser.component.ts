import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  user:any 
  isLoaded=false
  constructor(private _route:ActivatedRoute, private _data:DataService) { }
// ?x=1
  ngOnInit(): void {
    // console.log(this._route.snapshot.paramMap.get("id"))
    // this._route.paramMap.subscribe(params=> console.log(params.get('id')))
    console.log(this._route.snapshot.params['id'])
    this.getUserData()
  }

  getUserData(){
    this._data.getSingleUser(this._route.snapshot.paramMap.get("id")).subscribe(
      res=> this.user = res.data,
      e=>{},
      ()=> this.isLoaded=true
    )
  }
}
