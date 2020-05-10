import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application1';
  currentData;
  constructor(private appSer:AppServiceService)
  {

  }
  ngOnInit(): void {
    this.currentData=this.appSer.doShowCurrentData();
  }
}
