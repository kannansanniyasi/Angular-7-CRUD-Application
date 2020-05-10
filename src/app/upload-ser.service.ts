import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadSerService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8200/application/file/";
  
  uploadedFile(file:File,name:any):Observable<HttpEvent<any>>
  {
    const data:FormData=new FormData();
    data.append("file",file);
    data.append("name",name);
    const newRequest=new HttpRequest('POST',this.baseUrl+"saveFile",data,
    {
      reportProgress:true,
      responseType:'json'
    });
    return this.http.request(newRequest);
  }

  getFiles():Observable<any>
  {
    return this.http.get(this.baseUrl+"getFile");
  }

}
