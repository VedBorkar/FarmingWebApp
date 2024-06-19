import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IFarmModel } from 'src/app/shared/model/farm.model';
import { AddFarmService } from 'src/app/shared/services/add-farm.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss',
    "../../../../assets/css/bootstrap.min.css",
    "../../../../assets/css/font-awesome.min.css",
    "../../../../assets/css/style.css"
  ]
})
export class FarmComponent {
  public FarmModel: IFarmModel = <IFarmModel>{};

  constructor(public router:Router, private addFarmService: AddFarmService, private authService: DataService) {}

  addFarm(FarmModel = <IFarmModel>{}) {
    FarmModel["farmerID"] = this.authService.getUserID();
    this.addFarmService.addFarm(FarmModel).subscribe((response) => {
      debugger
      console.log(response)
      if (response && response["successful"] && !(response["data"][0]['Message'].length>0)) {
        alert('New farm added');
        this.router.navigate(["/dashboard"]); 
      } else {
        alert(response["data"][0]['Message']);
        this.router.navigate([""]);
      }
    });
  }
}