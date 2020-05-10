import { Component, OnInit } from '@angular/core';
import { EmpServicesService } from '../emp-services.service';
import { Observable, from } from 'rxjs';
import { Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title;
  successMsg;
  errorMsg;
  countryList=["IND","SG"];
  flg=false;
  stateList=["Tamil Nadu","Ang Mo Kio"];

  disflg=false;
  employee:Employee=new Employee();
  employees:Observable<Employee[]>;


  constructor(private empSer:EmpServicesService) { }

  ngOnInit(): void {
    this.title=this.empSer.doShowTitle();
    this.getEmployeeDetails();
  }

  getEmployeeDetails()
  {
    this.empSer.getEmployeeDetails().subscribe(
      data=>
      {
        console.log(data);
        this.employees;
        this.employees=data;
      },
      error=>
      {
        console.error();
      }
    );
  }


  doSaveEmp()
  {
     let flg=this.validation();
    if(!flg)
    {
      
      this.empSer.saveEmployee(this.employee).subscribe(
        data=>
        {
          console.log(data);
          this.successMsg="Employee Registeration Successfully";
          this.employee=new Employee();
          this.getEmployeeDetails();
        },
        error=>
        {
          console.error();
          this.errorMsg("Employe Registeration Failed");
        }
      );

    }
  }

  validation()
  {
    console.log(this.employee['name']);
    this.flg=false;
    this.errorMsg="";
    this,this.successMsg="";
    if(null==this.employee['name'] || this.employee['name']=='')
    {
      this.errorMsg="Plase Enter Name \n";
      this.flg=true;
    }
    if(null==this.employee['email'] || this.employee['email']=='')
    {
      this.errorMsg+="Plase Enter Email \n";
      this.flg=true;
    }
    if(null==this.employee['phone'] || this.employee['phone']=='')
    {
      this.errorMsg+="Plase Enter Phone \n";
      this.flg=true;
    }
    if(null==this.employee['state']|| this.employee['state']=='')
    {
      this.errorMsg+="Plase Enter State";
      this.flg=true;
    }
    if(null==this.employee['country'] || this.employee['country']=='')
    {
      this.errorMsg+="Plase Enter Country";
      this.flg=true;
    }

    return this.flg;

  }

  deleteEmp(employee)
  {
    this.empSer.deleteEmployee(employee).subscribe(
      data=>
      {
        console.log("delete"+data);
        this.getEmployeeDetails();
      },error=>
      {
        console.error();
      }
    );
    
  }

  doUpdateEmp()
  {
    let flg=this.validation();
    console.log("Flg"+flg);
    if(!flg)
    {
      this.empSer.updateEmployee(this.employee).subscribe(
        data=>
        {
          console.log("update"+data);
          this.employee=new Employee();
          this.getEmployeeDetails();
          this.disflg=false;
        }
      );
    }
  }

  updateEmp(employee)
  {
    this.employee=new Employee();
    this.employee=employee;
    this.disflg=true;
  }
  
}
