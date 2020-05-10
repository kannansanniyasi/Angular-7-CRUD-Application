import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppServiceService } from './app-service.service';
import { EmpServicesService } from './emp-services.service';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ContactServicesService } from './contact-services.service';
import { UserComponent } from './user/user.component';
import { UserServiceService} from './user-service.service';
import { UploadComponent } from './upload/upload.component';
import { UploadSerService } from  './upload-ser.service';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './animations/animations.component';
import { MaterialComponent } from './material/material.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { PhpExampleComponent } from './php-example/php-example.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RoutingComponent,
    HomeComponent,
    ContactComponent,
    UserComponent,
    UploadComponent,
    VirtualScrollComponent,
    AnimationsComponent,
    MaterialComponent,
    PhpExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [AppServiceService,EmpServicesService,ContactServicesService,UserServiceService,UploadSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
