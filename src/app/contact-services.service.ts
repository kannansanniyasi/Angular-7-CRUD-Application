import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {

  private baseUrl="http://localhost:8200/application/contact/";

  constructor(private httpclient:HttpClient) { }
  contactTitle()
  {
    return "Contact Registeration";
  }
  
  
  doGetContactDetails():Observable<any>
  {
    return this.httpclient.get(this.baseUrl+"contactData");
  }

  doSaveContact(contact:Object):Observable<object>
  {
    return this.httpclient.post(this.baseUrl+"saveContact",contact);
  }
  doDeleteContact(contcat:Object):Observable<Object>
  {
    return this.httpclient.post(this.baseUrl+"delete",contcat);
  }
  doUpdateContact(contcat:Object):Observable<Object>
  {
    return this.httpclient.post(this.baseUrl+"update",contcat);
  }

}
