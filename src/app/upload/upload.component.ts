import { Component, OnInit } from '@angular/core';
import { UploadSerService } from '../upload-ser.service';
import { Subscriber, Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileInfo } from './fileinfo';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  title="File Uploaded"
  selectedFiles:FileList;
  currentFile:File;

  progress=0;
  successMsg;
  errorMsg;
  fileinfo:Observable<FileInfo[]>;

  name;

  constructor(private fileSer:UploadSerService) { }

  ngOnInit(): void {
   this.getFiles();
  }
  getFiles()
  {
    this.fileinfo=this.fileSer.getFiles();
    this.resetVal();
  }
  

  selectFile(event)
  {
    console.log("File Event "+event.target.files)
    this.selectedFiles=event.target.files;
  }
  uploadFile()
  {
    this.progress=0;
    this.currentFile=this.selectedFiles.item(0);
    console.log("Current File"+ this.currentFile);
    console.log("File Name :"+this.name);
    this.fileSer.uploadedFile(this.currentFile,this.name).subscribe(
      event=>
      {
        if(event.type==HttpEventType.UploadProgress)
        {
          this.progress=Math.round(100*event.loaded/event.total);
          console.log("uploaded Progree");
        }else if(event instanceof HttpResponse)
        {
          this.successMsg=event.body.messsage;
          console.log("File Uploaded Scuussfully");
          this.getFiles();

        }
      },
      error=>
      {
        this.progress=0;
        this.errorMsg="File is not uploaded";
        console.log(error);
        this.currentFile=undefined
      }
    );
    this.selectedFiles=undefined;
  }

  resetVal()
  {
    this.progress=0;
    this.currentFile=undefined;
    this.selectedFiles=undefined;
    this.name="";
  }

}
