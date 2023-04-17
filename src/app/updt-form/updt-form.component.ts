import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceApiService } from '../service-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updt-form',
  templateUrl: './updt-form.component.html',
  styleUrls: ['./updt-form.component.css']
})
export class UpdtFormComponent implements OnInit {

  constructor( private ser1:ServiceApiService,
    private actroute:ActivatedRoute) { }

  curr_id:any;
  ngOnInit(): void {
    
    this.actroute.params.subscribe(
      (data)=>{this.curr_id=data['id']}
    )
    this.onUpdate()
  }

  update= new FormGroup({
    name1:new FormControl("",Validators.required),
    location1:new FormControl("",Validators.required),
    age1:new FormControl("",Validators.required),
    contact1:new FormControl("",Validators.required),
  })

  onUpdate()
  {
    console.log(this.update.value)
    this.ser1.update_serfun(this.curr_id,this.update.value).subscribe(
      (result )=>{console.log(result)}
    )
  }

  
    
  

}
