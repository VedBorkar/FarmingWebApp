import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userName = "ok";
  private userID = 0;
  private farmData: any = {};

  constructor() { }

  setUserName(name: string): void {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  setUserID(ID: number): void {
    this.userID = ID;
  }

  getUserID(): number {
    return this.userID;
  }

  setFarmData(farmData: any): void {
    this.farmData = farmData;
  }

  getFarmData(): any {
    return this.farmData;
  }
}
