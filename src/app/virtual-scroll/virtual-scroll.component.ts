import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  constructor(private appSer:AppServiceService) { }

  users:Observable<User[]>;

  public personalList=[];
  public userlist=[];

  title="Virual Scrolling/Drag Drop";
  ngOnInit(): void {
    this.users=this.appSer.getUserDetails();

    this.appSer.getPersonalData().subscribe(
      data=>
      {
        this.personalList=Array.from(Object.keys(data),k=>data[k]);
        this.userlist=Array.from(Object.keys(data),k=>data[k]);
        console.log(this.personalList);
      },
      error=>
      {
        console.log(error);
      }
    );

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
    transferArrayItem(event.previousContainer.data,event.container.data,
    event.previousIndex, event.currentIndex)
    } else {
    moveItemInArray(this.personalList, event.previousIndex, event.currentIndex);
    }
  }

}
