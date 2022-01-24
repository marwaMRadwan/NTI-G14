import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
x=5
  constructor() { }

  ngOnInit(): void {
  }
addToX(){ this.x+=10}
}
