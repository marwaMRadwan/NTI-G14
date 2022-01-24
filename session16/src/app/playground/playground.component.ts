import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
flag=false
monNum=1
months=['jan', 'feb', 'mar', 'apr']
  constructor() { }

  ngOnInit(): void {
  }

}
