import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-crudcomp2',
  templateUrl: './crudcomp2.component.html',
  styleUrls: ['./crudcomp2.component.css']
})
export class Crudcomp2Component implements OnInit {

  constructor(private serv1:ServiceApiService , private http1:HttpClient) { }

  ngOnInit(): void {

    // this.getmongdata()
    this.abc()
  }


  ab:any;
  ab1:any;

  url11="https://apidevelopment.violetlms.com/api/v2/Shared/AngularCandidate";

  abc(){
   const formData = { "DomainID": 0, "UserCode": "Test", "Password": "Welcome"};
   const headers = new HttpHeaders()
   headers.append('Content-Type','application/json');
  
    this.http1.post(this.url11,formData,{
     headers:headers
   }).subscribe((data2)=>{
    this.ab = data2
    //  console.log(data2,formData,headers)
    //  return this.ab
   })





  // mongdata1:any;
  // getmongdata(){
  //   return this.serv1.getcompassdata().subscribe(
  //     (data)=>{this.mongdata1=data}
  //   )
   
  }

}
