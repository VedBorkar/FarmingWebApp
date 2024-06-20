import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICropMasterModel } from 'src/app/shared/model/cropmaster.model';
import { DataService } from 'src/app/shared/services/data.service';
import { CropService } from 'src/app/shared/services/crop.service';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit{
  
  public CropMasterModel: ICropMasterModel = <ICropMasterModel>{};
  public cropList: any = {};
  public createCropFlag = false;

  ngOnInit(): void {
    this.selectCropMaster();
  }

  constructor(public router: Router, private dataService: DataService, private CropService: CropService) {}

  addCropMaster(CropMasterModel: ICropMasterModel) {
    this.CropService.addCropMaster(CropMasterModel).subscribe((response) => {
      debugger
      console.log(response)
      if (response && response["successful"] && !(response["data"][0]['Message'].length>0)) {
        alert('New master crop added');
        this.router.navigate(["/dashboard"]); 
      } else {
        alert(response["data"][0]['Message']);
      }
    });
  }
  selectCropMaster() {
    this.CropService.selectCropMaster(0).subscribe((response)=>{
      if(response && response['data']){
        this.cropList = response['data']
      }
    })
  }
}
