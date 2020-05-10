import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private appSer:HttpClient) { }
  doShowCurrentData()
  {
    return new Date();
  }
  countryList=[];
  doGetCountry()
  {
    this.countryList=["IND","SG"];
    return this.countryList;
  }
  private baseUrl="http://localhost:8200/application/user/";
   
  getUserDetails():Observable<any>
  {
    return this.appSer.get(this.baseUrl+"userScroll");
  }
  getPersonalData()
  {
    return this.appSer.get("http://jsonplaceholder.typicode.com/users");
  }

}
