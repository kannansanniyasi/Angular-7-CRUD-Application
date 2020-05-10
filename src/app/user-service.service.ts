import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl="http://localhost:8200/application/user/";
  constructor(private http:HttpClient) 
  { }

  getUserDetails():Observable<any>
  {
    return this.http.get(this.baseUrl+"userDetails");
  }

  getExportData()
  {
    return this.http.get(this.baseUrl+"userDetails");
  }

  getUser(id:number):Observable<object>
  {
    return this.http.get(this.baseUrl+"getUser/"+id);
  }

  saveUser(user:object):Observable<object>
  {
    //return this.http.post(this.baseUrl+"saveUser",user);
    return this.http.put(this.baseUrl+"saveUser",user);
  }

  updateUSer(user:object):Observable<Object>
  {
   // return this.http.post(this.baseUrl+"update",user);
   return this.http.put(this.baseUrl+"update",user);
  }

  deleteUser(user:object):Observable<object>
  {
    console.log("user"+user);
    //return this.http.post(this.baseUrl+"delete",user);
    return this.http.put(this.baseUrl+"delete",user);
  }

  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  public exportExcel(jsonData:any[],filename:string):void
  {

    const ws:XLSX.WorkSheet=XLSX.utils.json_to_sheet(jsonData);
    const wb:XLSX.WorkBook={Sheets:{'data':ws},SheetNames:['data']};
    const excelBuffer:any=XLSX.write(wb,{bookType:'xlsx',type:'array'});
    this.saveExcelFile(excelBuffer,filename);
  }

  private saveExcelFile(buffer:any,filename:string):void
  {
    const data:Blob=new Blob([buffer],{type:this.fileType});
    FileSaver.saveAs(data,filename+this.fileExtension);
  }
  
}
