import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICropModel } from 'src/app/shared/model/crop.model';
import { CropService } from 'src/app/shared/services/crop.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-add-crops',
  templateUrl: './add-crops.component.html',
  styleUrls: ['./add-crops.component.scss',
    // "../../../../assets/css/bootstrap.min.css",
    // "../../../../assets/css/font-awesome.min.css",
    // "../../../../assets/css/style.css"
  ]
})
export class AddCropsComponent implements OnInit{

  public CropModel: ICropModel = <ICropModel>{};
  public cropList: any = {};

  ngOnInit(): void {
      this.selectMasterCrops();
  }

  constructor(public router:Router, private CropService: CropService, private authService: DataService) {}

  addCrop(CropModel = <ICropModel>{}) {
    CropModel["cropID"] = this.authService.getUserID();
    this.CropService.addCrop(CropModel).subscribe((response) => {
      debugger
      console.log(response)
      if (response && response["successful"] && !(response["data"][0]['Message'].length>0)) {
        alert('New crop added');
        this.router.navigate(["/dashboard"]); 
      } else {
        alert(response["data"][0]['Message']);
        this.router.navigate([""]);
      }
    });   
  }

  selectMasterCrops() {
    this.CropService.selectCropMaster(0).subscribe((response)=>{
      if(response && response['data']){
        this.cropList = response['data']
      }
    })
  }
}

