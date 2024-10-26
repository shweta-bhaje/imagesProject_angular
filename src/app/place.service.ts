import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient){}
savePicture(placeName:string,discription:string,picture:File)
{
   const formData=new FormData();
   formData.append("placeName",placeName);
   formData.append("discription",discription);
   formData.append("file",picture);
    return this.http.post("http://localhost:8080/place",formData);
}

getAll()
{
 return this.http.get("http://localhost:8080/place");
}
deleteRecord(id:any)
{
 return this.http.delete("http://localhost:8080/place/"+`${id}`);
}
}
