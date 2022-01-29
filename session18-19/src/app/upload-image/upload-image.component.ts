import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/services/data.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  myFile:any
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  imgURL:any=""
  onChange(event:any){
    console.log(event.target.files[0])
    this.myFile= event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  onUpload(){
    const formData = new FormData()
    formData.append('image', this.myFile, this.myFile.name)
    this._data.uploadImage(formData).subscribe(data=>console.log(data))
  }
}
