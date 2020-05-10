import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { UploadComponent } from './upload/upload.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { AnimationsComponent } from './animations/animations.component';
import { MaterialComponent } from './material/material.component';
import { PhpExampleComponent } from './php-example/php-example.component';



const routes: Routes = [
  { path:"home",component:HomeComponent},
  { path:"employee",component:EmployeeComponent},
  { path :"contact",component:ContactComponent},
  { path :"user",component:UserComponent},
  { path :"upload",component:UploadComponent},
  { path :"virtual",component:VirtualScrollComponent},
  { path :"animation", component:AnimationsComponent},
  { path :"material", component:MaterialComponent},
  { path :"phpExmaple",component:PhpExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[HomeComponent,EmployeeComponent,ContactComponent,UploadComponent,VirtualScrollComponent];