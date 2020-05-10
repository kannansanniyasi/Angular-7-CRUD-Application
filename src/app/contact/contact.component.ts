import { Component, OnInit } from '@angular/core';
import { ContactServicesService} from '../contact-services.service';
import {FormGroup,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private  conServ:ContactServicesService) { }

  contactForm;
  title;
  successMsg;
  errorMsg;
  flg;
  countryList=["IND","SG"];
  stateList=["Tamil Nadu","Ang Mo Kio"];

  contcats:Observable<Contact[]>;
  contact:Contact=new Contact();
  disFlg=false;

  ngOnInit(): void 
  {
    this.title=this.conServ.contactTitle();
    
    this.createForm();
    this.getContactDetails();

  }
  createForm()
  {
    this.contactForm=new FormGroup(
      {
        "id":new FormControl(""),
        "name":new FormControl(""),
        "email":new FormControl(""),
        "phone":new FormControl(""),
        "state":new FormControl(""),
        "country":new FormControl("")
      }
    );
  }
  
  getContactDetails()
  {
    
    this.conServ.doGetContactDetails().subscribe(
      data=>
      {
        this.contcats;
        this.contcats=data;

      },
      error=>
      {
        console.error();
      }
    );
  }

  doSaveEmp(contact)
  {
    console.log(contact.name);
    var flg=this.validation(contact);
    if(!this.flg)
    {
      this.conServ.doSaveContact(contact).subscribe(
        data=>
        {
          console.log("succes");
          this.createForm();
          this.getContactDetails();
          this.successMsg="Contact Registeration Successfully";
        },
        error=>
        {
          console.error();
          this.errorMsg="Contact Registeration failed";
        }
      );
    }
    
  }


  validation(contact)
  {
     this.flg=false;
    this.errorMsg="";
    this,this.successMsg="";
    if(null==contact.name || contact.name=='')
    {
      this.errorMsg="Plase Enter Name \n";
      this.flg=true;
    }
    if(null==contact.email || contact.email=='')
    {
      this.errorMsg+="Plase Enter Email \n";
      this.flg=true;
    }
    if(null==contact.phone || contact.phone=='')
    {
      this.errorMsg+="Plase Enter Phone \n";
      this.flg=true;
    }
    if(null==contact.state|| contact.state=='')
    {
      this.errorMsg+="Plase Enter State";
      this.flg=true;
    }
    if(null==contact.country || contact.country=='')
    {
      this.errorMsg+="Plase Enter Country";
      this.flg=true;
    }

    return this.flg;

  }


  deleteContcat(contcat)
  {
    this.conServ.doDeleteContact(contcat).subscribe(
      data=>
      {
        console.log(data);
        this.getContactDetails();
      },
      error=>
      {
        console.error();
      }
    );
  }

  updateContact(contact)
  {
    this.contactForm=new FormGroup(
      {
        "id":new FormControl(contact.id),
        "name":new FormControl(contact.name),
        "email":new FormControl(contact.email),
        "phone":new FormControl(contact.phone),
        "state":new FormControl(contact.state),
        "country":new FormControl(contact.country)
      }
    );

    this.disFlg=true;
  }


  doUpdateEmp(contact)
  {
    var flg=this.validation(contact);
    if(!flg)
    {
      this.conServ.doUpdateContact(contact).subscribe(
        data=>
        {
          console.log(data);
          this.getContactDetails();
          this.createForm();
          this.disFlg=false;
        },error=>
        {
          console.log(error);
        }
      );
    }
  }

}
