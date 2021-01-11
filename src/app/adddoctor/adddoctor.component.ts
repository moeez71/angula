import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  sname:string = "";
  sdesignation:string = "";
  specialization: string = "";
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  addDoctor(){
   
  var ret;
  let Doctor={
    name: this.sname,
    speciality:  this.specialization,
    designation: this.sdesignation
  };
this._data.addDoctor(Doctor).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Doctor Added')
  );
  alert("Doctor Added Successfully");
  this.sname='';
  this.sdesignation='';
  this.specialization= ''
    }

  }
