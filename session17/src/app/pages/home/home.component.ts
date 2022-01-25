import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.readApi().subscribe(result=> this.data = result)
  }

}
