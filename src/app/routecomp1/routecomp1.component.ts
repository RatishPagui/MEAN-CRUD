import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceApiService } from '../service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routecomp1',
  templateUrl: './routecomp1.component.html',
  styleUrls: ['./routecomp1.component.css']
})
export class Routecomp1Component implements OnInit {

  constructor(private http:HttpClient,
              private servicefile:ServiceApiService,
              private route1:Router) { }

  ngOnInit(): void {
    this.docshowdata()
    
  }

docdata:any;
docshowdata(){
  this.servicefile.geturldatafordoc().subscribe(
    (data)=>{this.docdata=data}
  )
  console.log(this.docdata)
}

ondocdetails(pr:any)
{
    this.route1.navigate(["/doctordetails",pr])
    console.log(pr)
}

pr_data_ser = this.servicefile.getdocdata();

onprsel(pr:any){
  this.route1.navigate(['/doctordetails',pr])
}

}
