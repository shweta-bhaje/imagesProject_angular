import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlaceService } from '../place.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
interface User {
  placeName: string;
  discription: string;
  picture:string
}
@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule,FilterPipe,FormsModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
  
})


export class ShowComponent {


  searchText:any;
  allData:User[]=[];
constructor(private http:HttpClient){}

ngOnInit()
{
this.display();
}


display()
{
  this.http.get<User[]>("http://localhost:8080/place").subscribe((response:any)=>
  {
    console.log(response);
    this.allData=response;
    console.log(this.allData);
  }, error => {
    console.log("error occured while fetching user list");
  } 
)
}

}
