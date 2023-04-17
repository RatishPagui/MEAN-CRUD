import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-upd-form',
  templateUrl: './upd-form.component.html',
  styleUrls: ['./upd-form.component.css']
})
export class UpdFormComponent implements OnInit {

  constructor( private ser:ServiceApiService) { }

  ngOnInit(): void {
    this.onreg()
  }

  register= new FormGroup({
    Name1:new FormControl("",Validators.required),
    Location1:new FormControl("",Validators.required),
    Age1:new FormControl("",Validators.required),
    Contact1:new FormControl("",Validators.required),
  })

  onreg()
  {
    console.log(this.register.value)
    this.ser.getposturldata(this.register.value).subscribe(
      ()=>{}
    )
  }

}
