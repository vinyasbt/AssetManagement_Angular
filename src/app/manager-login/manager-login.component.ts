import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  userid: number;
  userpassword: String;
  managerdetails: any={
    userid:null,
    username:null,
    userpassword:null,
    usertype:null
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }


  printForm(loginForm: NgForm) {
    
    this.adminService.loginPage(loginForm.value).subscribe(login => {
      this.managerdetails=login;

      if (login === null) {
        console.log(login);
      alert("enter valid login credentials")      
      }
      else{
        if(this.managerdetails.usertype==="manager")
        {
      console.log(login);
      
      localStorage.setItem('token' , "true");
      this.adminService.ismanagerloggedin= true;
    this.router.navigateByUrl('/manageroperation')
    this.adminService.changeLogin();
      }
      else{
        alert("enter valid credentials of manager")
      }

    }
  }
    )
  }
}
