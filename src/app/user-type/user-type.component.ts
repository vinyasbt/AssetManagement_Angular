import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  constructor(private service : AdminService, private router : Router) { }

  ngOnInit() {
  }
  logout(){
    
    if(localStorage.getItem('admin') === 'true' && this.service.isAdminLoggedIn === true){
      localStorage.clear();
      this.service.isadminloggedin=false
      this.router.navigateByUrl('/adminlogin')
      
      this.service.changeAdminLogin()
    }
    if(localStorage.getItem('token') === 'true' && this.service.ismanagerloggedin === true){
      localStorage.clear();
      this.service.ismanagerloggedin=false
    this.router.navigateByUrl('/managerlogin')
    
    this.service.changeLogin();
    }
    
    
  }

}
