import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServicesService {

  private baseUrl="http://localhost:8200/application/employee/";
  constructor(private httpClient:HttpClient) { }
  doShowTitle()
  {
    return "Employee Registeration";
  }


  getEmployeeDetails():Observable<any>
  {
   return this.httpClient.get(this.baseUrl+"empDetails");
  }

  saveEmployee(employee:object):Observable<object>
  {
    return this.httpClient.post(this.baseUrl+"saveEmp",employee);
  }
  deleteEmployee(employee:object):Observable<object>
  {
    return this.httpClient.post(this.baseUrl+"delete",employee);
  }

  updateEmployee(employee:object):Observable<object>
  {
    return this.httpClient.post(this.baseUrl+"update",employee);
  }

}
