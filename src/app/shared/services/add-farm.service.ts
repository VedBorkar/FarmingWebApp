import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFarmModel } from '../model/farm.model';
import { environment } from 'src/environments/environment';
import { take, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFarmService {

  constructor(public http: HttpClient) { }

  addFarm(FarmModel = <IFarmModel>{}) {
    let data = {
      farmName: FarmModel["farmName"],
      farmDescription: FarmModel["farmDescription"],
      farmImage: FarmModel["farmImage"],
      farmerID: FarmModel["farmerID"]
    }
    let url = `${environment['ApiUrl']}api/FarmerApp/FarmCreate`;
    return this.http.post(url, data).pipe(map((i: any) => i), take(1));
  }

  selectFarm(farmerID: number, input: string): Observable<any>{
    const url = `${environment['ApiUrl']}api/FarmerApp/FarmSelect?inputID=${farmerID}&input=${input}`;
    return this.http.get(url)
    }
}
