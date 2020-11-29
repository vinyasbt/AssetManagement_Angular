import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  userid: number;
  userpassword: String;
  admindetails: any={
    userid:null,
    username:null,
    userpassword:null,
    usertype:null
  }

  error: string;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }


  printForm(loginForm: NgForm) {
    this.error = null;
    this.adminService.loginPage(loginForm.value).subscribe(login => {
      this.admindetails=login;

      if (login === null) {
        console.log(login);
        alert("enter valid login credentials");
      }
      else{
        if(this.admindetails.usertype==="admin")
        {

      console.log(login);
      localStorage.setItem('admin' , "true");
          this.adminService.isadminloggedin=true;
    this.router.navigateByUrl('/adminoperation')
    this.adminService.changeAdminLogin();
     
      }
      else{
        alert("enter valid credentials of admin")
      }

    }
  }
    )
  }

}
