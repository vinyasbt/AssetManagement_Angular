import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-all-assets',
  templateUrl: './view-all-assets.component.html',
  styleUrls: ['./view-all-assets.component.css']
})
export class ViewAllAssetsComponent implements OnInit {

  selectviewallassets = {
    assetdes: null,
    assetid: null,
    assetimg: null,
    assetname: null,
    quantity: null,
    status: null
  }

  
  constructor( private adminservice:AdminService,private router: Router) { }

  ngOnInit() {
   this.adminservice.getData();
   
  }

  selectViewallassets(viewallassets){
    console.log(viewallassets);
    this.selectviewallassets=viewallassets;
  }

  updateviewallassets(viewallassetsform : NgForm){
    this.adminservice.updateData(viewallassetsform.value).subscribe(resData=>{
      console.log(resData);
      alert('asset updated successfully')
    },err =>{
      console.log(err);
    })
  }
  deleteviewallassets(viewallassets){
    this.adminservice.deleteData(viewallassets.assetid).subscribe(resData=>{
      console.log(resData);
      alert('asset removed successfully')
      this.router.navigate(['/adminoperation'])
    },err=>{
      console.log(err);
    })
  }

}
