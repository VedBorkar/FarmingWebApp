import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { take, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http: HttpClient) { }

  userRegistration(userCredentialModel: any) {
    let data = {
      emailId: userCredentialModel['emailID'],
      userFirstName: userCredentialModel['userFirstName'],
      userLastName: userCredentialModel['userLastName'],
      userMobileNumber: userCredentialModel['userMobileNumber'],
      password: userCredentialModel['password'],
    }
    let url = `${environment['ApiUrl']}api/FarmerAppCommon/FarmerAppRegistration/UserID,EntityId,UserType`;
    return this.http.post(url, data).pipe(map((i: any) => i), take(1));
  }

  userLogIn(userCredentialModel: any) {

    let url = `${environment['ApiUrl']}api/FarmerAppCommon/FarmerAppLogIn?emailId=${userCredentialModel['userID']}&password=${userCredentialModel['password']}`;
    return this.http.get(url).pipe(map((i: any) => i));
  }

}
