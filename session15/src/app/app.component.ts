import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'session15';
  imgSrc : string = "assets/logo.png"
  c :number = 0
  htmlData= "<div class=\"alert alert-primary\" >hello</div>"
  data:any
  show():string {
    return "hello"
  }
  handleClick(){
    console.log('hello')
  }
  addCounter(){
    this.c++
  }
  minCounter(){
    this.c--
  }
}
