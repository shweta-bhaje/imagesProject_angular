import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceService } from '../place.service';


@Component({
  selector: 'app-picturepost',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './picturepost.component.html',
  styleUrl: './picturepost.component.css'
})
export class PicturepostComponent {
dataObj:any={
  placeName:'',
  discription:'',
  picture:''
};
selectedFile!:File;

onFileSelected(event:any){
  this.selectedFile=event.target.files[0];
}

constructor(private service:PlaceService){}
save()
{
this.service.savePicture(this.dataObj.placeName,this.dataObj.discription,this.selectedFile).subscribe((response:any)=>
{
  console.log(response);
  this.dataObj=response;
  console.log(this.dataObj);
}
)
}

}