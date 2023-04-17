import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-crudcomp3',
  templateUrl: './crudcomp3.component.html',
  styleUrls: ['./crudcomp3.component.css']
})
export class Crudcomp3Component implements OnInit {

  constructor(private ser:ServiceApiService) { }

  ngOnInit(): void {
    this.getmongdata()

  }

  emp1= new FormGroup({
    Name1:new FormControl("",Validators.required),
    Age1:new FormControl("",Validators.required),
    Dob1:new FormControl("",Validators.required),
    Email1:new FormControl("",Validators.required),
    Contact1:new FormControl("",Validators.required),
    Location1:new FormControl("",Validators.required)
  })

  onaddemployee()
  {
    console.log(this.emp1.value)
    this.ser.getposturldata1(this.emp1.value).subscribe(
      ()=>{}
    )
  }

  mongdata1:any;
  getmongdata(){
    return this.ser.getcompassdata().subscribe(
      (data)=>{this.mongdata1=data}
    )
   
  }

}
