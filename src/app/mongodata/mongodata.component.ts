import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mongodata',
  templateUrl: './mongodata.component.html',
  styleUrls: ['./mongodata.component.css']
})
export class MongodataComponent implements OnInit {

  constructor(private servicefile12:ServiceApiService,
    private route:Router) { }

  ngOnInit(): void {
    this.getMongodb()
  }

  delete_stu(i:any){
    this.servicefile12.delete_stud(i).subscribe(
      (result)=>{console.log(result)}
    )
  }

  update_dis(i:any)
  {
    this.route.navigate(["/updateform",i])
  }
  

  mgdb_data:any;
  getMongodb()
  {
    this.servicefile12.geturlData2().subscribe(
      (data)=>(this.mgdb_data=data)
    )
  }
  

}
