import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpServiceService {

  private baseUrl="http://localhost/application/";

  constructor(private http:HttpClient) { }

  getUser():Observable<any>
  {
    return this.http.get(this.baseUrl+"result.php");
  }
  saveUser(user:any):Observable<Object>
  {
    console.log("intput :"+user.name+"/"+user.email+"/"+user.phone);
    const data:FormData=new FormData();
    data.append("type","save");
    data.append("id",user.id);
    data.append("name",user.name);
    data.append("email",user.email);
    data.append("phone",user.phone);
     return this.http.post(this.baseUrl+"action.php",data);
  }

  deleteUser(user:any):Observable<Object>
  {
    console.log("intput :"+user.name+"/"+user.email+"/"+user.phone);
    const data:FormData=new FormData();
    data.append("type","delete");
    data.append("id",user.id);
    data.append("name",user.name);
    data.append("email",user.email);
    data.append("phone",user.phone);
     return this.http.post(this.baseUrl+"action.php",data);
  }

  updateUser(user:any):Observable<Object>
  {
    console.log("intput :"+user.name+"/"+user.email+"/"+user.phone);
    const data:FormData=new FormData();
    data.append("type","update");
    data.append("id",user.id);
    data.append("name",user.name);
    data.append("email",user.email);
    data.append("phone",user.phone);
     return this.http.post(this.baseUrl+"action.php",data);
  }

}
