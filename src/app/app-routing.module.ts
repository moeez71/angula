import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'AddDoctor',
    component:AdddoctorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
