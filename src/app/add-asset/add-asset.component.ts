import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
// import { ViewAllAssetsComponent } from '../view-all-assets/view-all-assets.component';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
assetid:number;
assetname:String;
quantity:Number;
assetdes:String;
status:String

  error: string;
  constructor( private adminService:AdminService,private router: Router) { }

  ngOnInit() {
  }

 

  addAssets(assetsForm: NgForm) {
    console.log(assetsForm.value);
    console.log(this.assetid)
    this.error=null;
    this.adminService.postData(assetsForm.value).subscribe(data=> {
      console.log(data);
      
      if(data===null){
        alert("asset not added..asset id is already present")
        this.error = "ID Already present, give new ID";
      }
      else{
        alert("asset added successfully...")
      this.router.navigate(['/adminoperation'])
      }
      assetsForm.reset();
    }, err=> {
      console.log(err);
    })
  }

}



