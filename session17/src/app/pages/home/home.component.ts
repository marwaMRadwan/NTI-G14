import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data:any[]=[]
  articles:Article[]=[]
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.readApi().subscribe((result)=> {
      this.data = result
    })
    this._data.readNewsApi().subscribe(res=>{
      console.log(res.articles)
      this.articles= res.articles
    })
  }

}
