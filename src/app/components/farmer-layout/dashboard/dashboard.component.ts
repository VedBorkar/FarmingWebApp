import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFarmService } from 'src/app/shared/services/add-farm.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  public FarmList: any[] = [];
  private userID: number = 0;
  public loggedIn = false;
  public farmName = "";

  ngOnInit(): void {
    this.SelectFarm();
  }
  constructor(public router: Router, private addFarmService: AddFarmService, private authService: DataService) { }

  SelectFarm() {
    this.userID = this.authService.getUserID();
    if (this.userID != 0 ){
      this.loggedIn = true;
   }
    this.addFarmService.selectFarm(this.userID, 'FarmByFarmerID').subscribe((response)=>{
      if(response && response['data']){
        this.FarmList = response['data']
      }
    })
  }

  storeFarmName(data: any) {
    this.authService.setFarmData(data);
    this.router.navigate(['crops']);
  }
}
