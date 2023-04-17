import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class APIdataComponent implements OnInit {

  constructor( private http:HttpClient,
              private servicefile1:ServiceApiService) { }

  ngOnInit(): void {
    // this.ongetData();
    this.onNewData();
    this.onNewData1()
  }

  // localdata:any;
  // url1="https://jsonplaceholder.typicode.com/users"

  // ongetData(){
  //   this.http.get(this.url1).subscribe(
  //     (data) => (this.localdata=data)
  //   )
  // }

  anydata:any;
  onNewData()
  {
    this.servicefile1.geturlData().subscribe(
      (data1)=>(this.anydata=data1)
    )
  }

  comdata:any;
  onNewData1()
  {
    this.servicefile1.geturlData1().subscribe(
      (data11)=>(this.comdata=data11)
    )
  }
  

}
