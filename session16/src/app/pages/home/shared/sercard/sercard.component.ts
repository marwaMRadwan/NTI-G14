import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sercard',
  templateUrl: './sercard.component.html',
  styleUrls: ['./sercard.component.css']
})
export class SercardComponent implements OnInit {
@Input() ser:any
  constructor() { }

  ngOnInit(): void {
  }

}
