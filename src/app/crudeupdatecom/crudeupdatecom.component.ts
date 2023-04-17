import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-crudeupdatecom',
  templateUrl: './crudeupdatecom.component.html',
  styleUrls: ['./crudeupdatecom.component.css']
})
export class CrudeupdatecomComponent implements OnInit {

  constructor(private ser:ServiceApiService,
    private actroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.actroute.params.subscribe(
      (data)=>{this.curr_id=data['id']}
    )

    this.onUpdateemployee()
  }

    
  emp2= new FormGroup({
    Name1:new FormControl("",Validators.required),
    Age1:new FormControl("",Validators.required),
    Dob1:new FormControl("",Validators.required),
    Email1:new FormControl("",Validators.required),
    Contact1:new FormControl("",Validators.required),
    Location1:new FormControl("",Validators.required)
  })

  curr_id:any;
  onUpdateemployee()
  {
    console.log(this.emp2.value)
    this.ser.update_serfun1(this.curr_id,this.emp2.value).subscribe(
      (result )=>{console.log(result)}
    )
  }

}
