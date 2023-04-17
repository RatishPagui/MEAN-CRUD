import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-routecomp3',
  templateUrl: './routecomp3.component.html',
  styleUrls: ['./routecomp3.component.css']
})
export class Routecomp3Component implements OnInit {

  constructor(private route1:ActivatedRoute,
              private serv1:ServiceApiService) { }

  reqid:any;
    reqdata:any;
  ngOnInit(): void {

    this.route1.params.subscribe(
      (para)=>{
        console.log(para)
        this.reqid=para['id']
      this.reqid=Number(this.reqid)-1}

       
    )
    this.onshowdata();
    console.log(this.reqdata)
    console.log(this.reqdata)

  }


  onshowdata()
  {
    this.serv1.geturldatafordoc().subscribe(
      (d)=>{this.reqdata=d}
    )
    
  }

}
