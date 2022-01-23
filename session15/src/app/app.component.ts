import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'session15';
  imgSrc : string = "assets/logo.png"
  htmlData= "<div class=\"alert alert-primary\" >hello</div>"
  show():string {
    return "hello"
  }
  
}
