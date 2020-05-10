import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { PhpServiceService } from '../php-service.service';

@Component({
  selector: 'app-php-example',
  templateUrl: './php-example.component.html',
  styleUrls: ['./php-example.component.css']
})
export class PhpExampleComponent implements OnInit {

  title="Angular with PHP";
  successMsg;
  errorMsg
  user:User=new User();
  users:Observable<User[]>;
  btlFlg=false;
  constructor(private phpSer:PhpServiceService) { }

  ngOnInit(): void {
    this.fetchRord();
  }

  fetchRord()
  {
    this.users;
    this.phpSer.getUser().subscribe(
      data=>
      {
        console.log("Data :"+data);
        this.users=data;
        this.btlFlg=false;
        this.user=new User();
      },
      error=>
      {
        console.log(error);
      }
    );
  }

  saveUser()
  {
    this.phpSer.saveUser(this.user).subscribe(
      data=>
      {
        console.log("Data :"+JSON.stringify(data));
        this.fetchRord();
      },
      error=>
      {
        console.error(error);
      }
    );
  }

  deleteUser(user)
  {
    this.phpSer.deleteUser(user).subscribe(
      data=>
      {
        console.log(data);
        this.fetchRord();
      }
      ,
      error=>
      {
        console.log(error())
      }
    );
  }

  updateUser(user)
  {
    this.user=user;
    this.btlFlg=true;
  }

  updateUserData()
  {
    this.phpSer.updateUser(this.user).subscribe(
      data=>
      {
        console.log(data);
        this.fetchRord();
      },
      error=>
      {
        console.log(error());
      }
    );
  }

}
