import { Component, OnInit } from '@angular/core';
import { Observable, from, observable } from 'rxjs';
import { User} from './user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:Observable<User[]>;
  user:User=new User();

  title="User Registeration";
  successMsg="";
  errorMsg="";
  btlFlg=false;

  constructor(private userSer:UserServiceService) { }

  ngOnInit(): void {
    this.getUserDetail();
    this.user=new User();
  }

  getUserDetail()
  {
    console.log("Get User Details");
    this.users;
    this.users=this.userSer.getUserDetails();
  }

  deleteUser(user)
  {
    this.userSer.deleteUser(user).subscribe(
      data=>
      {
        console.log(data);
        this.getUserDetail();
      },error=>console.log(error)
    );

  }

  saveUser()
  {
    
    this.userSer.saveUser(this.user).subscribe(
      data=>
      {
        console.log("response :"+data)
        this.user=new User();
        this.getUserDetail();
        this.successMsg="Data Inserted Successfully";
      },
      error=>console.log(error)
    );

   
  }

  updateUser(user)
  {
    this.user=new User();
    this.user=user;
    this.btlFlg=true;
    this.successMsg="";
    this.errorMsg="";
  }

  updateUserData()
  {
    console.log("Update User")
    this.userSer.updateUSer(this.user).subscribe(
      data=>
      {
        console.log("Update"+data)
        this.getUserDetail();
        this.user=new User();
        this.btlFlg=false;
        this.successMsg="Data Updated Successfully";
        this.errorMsg="";
      },
      error=>console.error(error)
    );

    this.userSer.getUser(this.user.id).subscribe(
      data=>console.log(data),
      error=>console.error(error)
    );

  }
  userData=[];
  exportExcel()
  {
    this.userSer.getExportData().subscribe(
      data=>
      {
        this.userData=Array.from(Object.keys(data),k=>data[k]);
        console.log("user Data"+this.userData);
         this.userSer.exportExcel(this.userData,"user");
      },error=>
      {
        console.log("Error");
      }
    );
    
  }

}
