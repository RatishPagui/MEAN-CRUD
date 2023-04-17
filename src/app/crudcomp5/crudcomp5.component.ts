import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-crudcomp5',
  templateUrl: './crudcomp5.component.html',
  styleUrls: ['./crudcomp5.component.css']
})
export class Crudcomp5Component implements OnInit {

  constructor(private ser1:ServiceApiService) { }

  ngOnInit(): void {
    
    this.getcompassdata1()
  }

  mongcompdata:any;
  getcompassdata1(){
    return this.ser1.getcompassdata().subscribe(
      (data)=>{this.mongcompdata=data}
    )
  }

  delete_emp1(i:any){
    this.ser1.delete_emp(i).subscribe(
      (result)=>{console.log(result)}
    )
  }


}
