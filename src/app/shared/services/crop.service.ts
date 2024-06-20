import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICropModel } from '../model/crop.model';
import { environment } from 'src/environments/environment';
import { Observable, map, take } from 'rxjs';
import { ICropMasterModel } from '../model/cropmaster.model';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(public http: HttpClient) { }

  addCrop(CropModel = <ICropModel>{}) {
    let data = {
      cropID: CropModel["cropID"],
      farmID: CropModel["farmID"],
      cropArea: CropModel["cropArea"],
      dateSown: CropModel["dateSown"]
    }
    let url = `${environment['ApiUrl']}api/FarmerApp/CropCreate`;
    return this.http.post(url, data).pipe(map((i: any) => i), take(1));
  }

  selectCropMaster(cropID: number): Observable<any>{
    const url = `${environment['ApiUrl']}api/FarmerApp/CropMasterSelect?inputID=${cropID}`;
    return this.http.get(url)
  }

  addCropMaster(CropModel = <ICropMasterModel>{}) {
    let data = {
      cropName: CropModel["cropName"],
      measurementUnit: CropModel["measurementUnit"],
      imageUrl: CropModel["imageUrl"]
    }
    let url = `${environment['ApiUrl']}api/FarmerApp/CropMasterCreate`;
    return this.http.post(url, data).pipe(map((i: any) => i), take(1));
  }
}
