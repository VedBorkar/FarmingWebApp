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
    localStorage.setItem("UserName", JSON.stringify(name));
    this.userName = name;
  }

  getUserName(): string {
    return this.userName = JSON.parse(localStorage.getItem("UserName") || "");
  }

  setUserID(ID: number): void {
    localStorage.setItem("userID", JSON.stringify(ID));
    this.userID = ID;
  }

  getUserID(): number {
    return this.userID = JSON.parse(localStorage.getItem("userID") || "");
  }

  setFarmData(farmData: any): void {
    this.farmData = farmData;
  }

  getFarmData(): any {
    return this.farmData;
  }
}
