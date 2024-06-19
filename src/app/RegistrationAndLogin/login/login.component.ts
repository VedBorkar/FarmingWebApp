import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { RegistrationService } from 'src/app/shared/services/registration.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
    "../../../assets/css/bootstrap.min.css",
    "../../../assets/css/font-awesome.min.css",
    "../../../assets/css/style.css"
  ]
})
export class LoginComponent {
  public userCredentialModel: any = {};
  public userEmail: string = "";
  public TitleName: string = "Sign In";
  public password: string = "";
  constructor(public router: Router, private registrationService: RegistrationService, private authService: DataService) {
    // this.password = environment.userCredentials.password;
    // this.userID = environment.userCredentials.emailID;
  }

  verifyCredentials(userCredentialModel: any) {

    this.registrationService.userLogIn(userCredentialModel).subscribe((response) => {
      if (response["successful"] && response["data"].length>0) {  
        this.authService.setUserID(response["data"][0]["ID"]);
        this.authService.setUserName(response["data"][0]["FirstName"]);
        this.router.navigate(['./dashboard']);
      } else {
        alert("Incorrect email or password.\n ")
      }
    });
  }

}
