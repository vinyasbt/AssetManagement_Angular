import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operator';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  viewallassets:any;
  viewallallocation:any;
  backendUrl = 'http://localhost:8090/AssetManagement_SpringRest/assets';
  // backendUrl = 'http://localhost:8081/assets';
  isLoggedIn : any = false;
  isAdminLoggedIn : any = false;
  isadminloggedin: any=false;
  ismanagerloggedin: any=false;

  constructor( private http:HttpClient) { }
  Assests : any[]
 
  

  getData(){
    return this.http.get(`${this.backendUrl}/allasset`)
    .subscribe(resData=>{
     // this.Assests = resData;
     console.log(resData);
      this.viewallassets=resData
      console.log(this.viewallassets);
    })
  }
  postData(data){
    return this.http.post(`${this.backendUrl}/add`,data) 
  }
  loginPage(login){
    return this.http.post(`${this.backendUrl}/login`,login) 
  }
  raiseAllocationRequest(data)
  {
    return this.http.post(`${this.backendUrl}/raiserequest`,data)

  }
  viewStatus(data)
  {
    return this.http.post(`${this.backendUrl}/viewstatus`,data);
  }
  updateData(data)
  {
    console.log("test" , data);
    console.log("assetId" , data.assetid);
    return this.http.put(`${this.backendUrl}/updateasset/${data.assetid}`,data) 
  }
  deleteData(data)
  {
    return this.http.delete(`${this.backendUrl}/delete/${data}`) 
  }
  setAllocationStatus(data)
  {
    console.log("service is ", data);
    return this.http.put(`${this.backendUrl}/setstatus`,data)
  }
  postEmployee(data)
  {
    return this.http.post(`${this.backendUrl}/addemployee`,data) 
  }
  getAllocation(){
    return this.http.get(`${this.backendUrl}/allassetallocation`)
    .subscribe(resData=>{
     console.log(resData);
      this.viewallallocation=resData
      console.log(this.viewallallocation);
    })
  }
  changeLogin(){
    if(localStorage.getItem("token") === 'true'){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
}
changeAdminLogin(){
  if(localStorage.getItem("admin") === 'true'){
    this.isAdminLoggedIn = true;
  }
  else{
    this.isAdminLoggedIn = false;
  }
}
  }

