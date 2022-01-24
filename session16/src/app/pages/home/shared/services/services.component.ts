import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any[] = [
    {imgUrl:"assets/services/s1.jpg", serviceName:"Service 1"},
    {imgUrl:"assets/services/s2.jpg", serviceName:"Service 2"},
    {imgUrl:"assets/services/s3.jpeg", serviceName:"Service 3"},
    {imgUrl:null, serviceName:"Service 3"},
    {imgUrl:"assets/services/s1.jpg", serviceName:"Service 1"},
    {imgUrl:"assets/services/s2.jpg", serviceName:"Service 2"},
    {imgUrl:"assets/services/s3.jpeg", serviceName:"Service 3"},
    {imgUrl:null, serviceName:"Service 3"},]
  constructor() { }

  ngOnInit(): void {
  }

}
