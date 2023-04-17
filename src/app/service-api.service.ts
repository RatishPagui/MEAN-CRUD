import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor( private http1:HttpClient) { }

  url="https://jsonplaceholder.typicode.com/users";
  url1="https://fakestoreapi.com/products";
  url2="http://localhost:3000/studentinfo"

  post_url="http://localhost:3000/addstud"
  
  getposturldata(i:any)
  {
    return this.http1.post(this.post_url,i)
  }


  private update_url : String="http://localhost:3000/studentinfo"
  update_serfun(id:any,data:any)
  {
    return this.http1.put(`${this.update_url}/${id}`,data)
  }




  geturlData()
  {
    return this.http1.get(this.url)
  }
  geturlData1()
  {
    return this.http1.get(this.url1)
  }

  geturlData2()
  {
    return this.http1.get(this.url2)
  }
  

  private newurl:String="http://localhost:3000/studentinfo"
  delete_stud(id:any){
    return this.http1.delete(`${this.newurl}/${id}`)
  }


getdocdata(){
  return this.http1.get(this.url)
}

geturldatafordoc(){
  return this.http1.get(this.url)
}



//practice

compurl="http://localhost:3000/employeeinfo1";
getcompassdata(){
  return this.http1.get(this.compurl)
}

private compurl1:String="http://localhost:3000/employeeinfo2"
delete_emp(id:any){
  return this.http1.delete(`${this.compurl1}/${id}`)
}

post_url1="http://localhost:3000/addemployee"
  
  getposturldata1(i:any)
  {
    return this.http1.post(this.post_url1,i)
  }

private update_url2 : String="http://localhost:3000/employeeinfo1"
update_serfun1(id:any,data:any)
{
  return this.http1.put(`${this.update_url2}/${id}`,data)
}




// url11="https://apidevelopment.violetlms.com/api/v2/Shared/AngularCandidate";

// abc(){
//  const formData = { "DomainID": 0, "UserCode": "Test", "Password": "Welcome"};
//  const headers = new HttpHeaders()
//  headers.append('Content-Type','application/json');

//  this.http1.post(this.url11,formData,{
//    headers:headers
//  }).subscribe((data)=>{
//    console.log(data,formData,headers)
//    return data
//  })

// }



}
