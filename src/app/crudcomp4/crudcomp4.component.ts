import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceApiService } from '../service-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudcomp4',
  templateUrl: './crudcomp4.component.html',
  styleUrls: ['./crudcomp4.component.css']
})
export class Crudcomp4Component implements OnInit {

  constructor( private ser:ServiceApiService,
               private actroute:ActivatedRoute,
               private route:Router) { }

  ngOnInit(): void {
    

    this.getmongdata();
  
  }





  mongdata1:any;
  getmongdata(){
    return this.ser.getcompassdata().subscribe(
      (data)=>{this.mongdata1=data}
    )
   
  }

  update_emp(i:any)
  {
    this.route.navigate(["/updateform1",i])
  }

}
