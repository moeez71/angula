import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'content-type':'application/json',
    responseType: 'text'
  })
};


@Injectable({
  providedIn: 'root'
})
  
export class DataService {
baseUrl="http://localhost:3000/";
  constructor(private http:HttpClient) {  }
   
  
  viewDoctor(){
    let url=this.baseUrl+ "doctors";
    return this.http.get(url,httpOptions);
  }
   addDoctor(Doctor){
     let body=JSON.stringify(Doctor);
   let url=this.baseUrl+ "adddoctor";
   return this.http.post(url,body,httpOptions);
 }
  
  }
