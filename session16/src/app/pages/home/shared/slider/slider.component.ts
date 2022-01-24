import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
