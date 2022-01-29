import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session20';
  val=""
  constructor(){console.log('constructor')}
  ngOnInit(){console.log('on init')}
  ngOnChanges(){console.log('on changes')}
  ngAfterViewInit(){console.log('view init')}
  ngAfterContentInit(){console.log("content init")}
  ngAfterContentChecked(){console.log('content checked')}
  ngAfterViewChecked(){console.log("view checked")}
  ngOnDestroy(){console.log('destroy')}
  hello(){ this.val="hello"}
}
